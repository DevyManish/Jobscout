"use client";

import React, { useState } from "react";
import { Upload, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function Features() {
  const [dragActive, setDragActive] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [file, setFile] = useState(null);
  const [analyzeResult, setAnalyzeResult] = useState(null);
  const [textToRephrase, setTextToRephrase] = useState("");
  const [rephrasedText, setRephrasedText] = useState("");
  const [isLoading, setIsLoading] = useState({
    analyze: false,
    rephrase: false,
  });

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file) => {
    if (file.type === "application/pdf" || file.type === "application/msword") {
      if (file.size <= 10 * 1024 * 1024) {
        setFile(file);
      } else {
        alert("File size should be less than 10MB");
      }
    } else {
      alert("Only .pdf and .doc files are accepted");
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const analyzeResume = async () => {
    if (!jobDescription || !file) {
      alert("Please provide both job description and resume file");
      return;
    }

    setIsLoading((prev) => ({ ...prev, analyze: true }));

    const formData = new FormData();
    formData.append("job_description", jobDescription);
    formData.append("file", file);

    try {
      const response = await fetch("https://jobscout-backend.onrender.com/analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setAnalyzeResult(result);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while analyzing the resume");
    } finally {
      setIsLoading((prev) => ({ ...prev, analyze: false }));
    }
  };

  const rephraseTextFunction = async () => {
    if (!textToRephrase) {
      alert("Please enter text to rephrase");
      return;
    }

    setIsLoading((prev) => ({ ...prev, rephrase: true }));

    try {
      const response = await fetch("https://jobscout-backend.onrender.com/rephrase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: textToRephrase }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setRephrasedText(result.rephrased_text);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while rephrasing the text");
    } finally {
      setIsLoading((prev) => ({ ...prev, rephrase: false }));
    }
  };

  return (
    <div className=" mt-10 md:px-20 bg-black text-white">
      {/* Abstract line patterns */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="space-y-12 md:space-y-24">
          {/* Resume Analyzer Section */}
          <section className="space-y-6 md:space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Resume Analyzer
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
                Upload your resume and job description to get instant feedback
                on match percentage and improvement suggestions
              </p>
            </div>

            <Card className="p-4 md:p-8 bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-zinc-400">
                    Job Description
                  </label>
                  <Textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the job description here..."
                    className="h-[200px] bg-zinc-800/50 border-zinc-700 resize-none"
                  />
                </div>

                <div
                  className={`
                    border-2 border-dashed rounded-lg p-4 md:p-8 text-center space-y-4 transition-colors
                    ${
                      dragActive
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-zinc-700 hover:border-zinc-600"
                    }
                  `}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Upload className="h-8 w-8 md:h-8 md:w-8 text-zinc-400" />
                    <p className="text-zinc-400">
                      {file
                        ? `File selected: ${file.name}`
                        : "Drag and drop your resume here"}
                    </p>
                    <p className="text-xs text-zinc-500">
                      Only .doc and .pdf files under 10MB accepted
                    </p>
                  </div>
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    accept=".pdf,.doc"
                    onChange={handleFileInput}
                  />
                  <Button
                    variant="secondary"
                    className="bg-zinc-800 hover:bg-zinc-700 "
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    Browse Files
                  </Button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Button
                  className="w-1/2 mt-6 bg-white rounded-2xl hover:text-slate-800"
                  onClick={analyzeResume}
                  disabled={isLoading.analyze}
                >
                  {isLoading.analyze ? "Analyzing..." : "Analyze Resume"}
                </Button>
              </div>
              {analyzeResult && (
                <div className="mt-6 p-4 bg-zinc-800 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">
                    Analysis Result:
                  </h3>
                  {/* <p>Match Percentage: {analyzeResult.match_percentage}</p> */}
                  <p>Suggestions: {analyzeResult.analysis}</p>
                </div>
              )}
            </Card>
          </section>

          {/* Text Rephraser Section */}
          <section className="space-y-6 md:space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Resume Text Rephraser
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
                Transform your resume content with AI-powered suggestions to
                make it more impactful
              </p>
            </div>

            <Card className="p-4 md:p-8 bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
              <div className="space-y-6">
                <Textarea
                  value={textToRephrase}
                  onChange={(e) => setTextToRephrase(e.target.value)}
                  placeholder="Enter the text you want to rephrase..."
                  className="h-[200px] bg-zinc-800/50 border-zinc-700 resize-none"
                />
                <div className="flex justify-center items-center">
                  <Button
                    className="w-1/2 mt-6 bg-white rounded-2xl hover:text-slate-800"
                    onClick={rephraseTextFunction}
                    disabled={isLoading.rephrase}
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    {isLoading.rephrase ? "Rephrasing..." : "Rephrase Text"}
                  </Button>
                </div>
                {rephrasedText && (
                  <div className="mt-6 p-4 bg-zinc-800 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">
                      Rephrased Text:
                    </h3>
                    <p>{rephrasedText}</p>
                  </div>
                )}
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}

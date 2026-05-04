"use client";

import { useState } from "react";
import { tutorsMock } from "@/mocks/tutors.mock";
import { subjectsMock } from "@/mocks/subjects.mock";
import SearchHeader from "@/components/search_student/SearchHeader";
import SearchFilters from "@/components/search_student/SearchFilters";
import TutorResults from "@/components/search_student/TutorResults";
import TopTutors from "@/components/search_student/TopTutors";

export default function SearchStudent() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [query, setQuery] = useState("");

  const filteredTutors = tutorsMock.filter((tutor) => {
    const matchesSubject = selectedSubject
      ? tutor.subjects.includes(selectedSubject)
      : true;

    const matchesQuery = query
      ? tutor.name.toLowerCase().includes(query.toLowerCase()) ||
        tutor.subjects.some((subject) =>
          subject.toLowerCase().includes(query.toLowerCase())
        )
      : true;

    return matchesSubject && matchesQuery;
  });

  return (
    <div className="app-page">
      <SearchHeader />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <section className="min-w-0 space-y-6">
          <SearchFilters
            subjects={subjectsMock}
            query={query}
            setQuery={setQuery}
            setSelectedSubject={setSelectedSubject}
          />

          <TutorResults tutors={filteredTutors} />
        </section>

        <TopTutors tutors={tutorsMock} />
      </div>
    </div>
  );
}

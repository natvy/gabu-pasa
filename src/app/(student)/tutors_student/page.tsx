"use client";

import { useState } from "react";
import { tutorsMock } from "@/mocks/tutors.mock";
import { subjectsMock } from "@/mocks/subjects.mock";
import TutorsHeader from "@/components/tutors/TutorsHeader";
import TutorsFilters from "@/components/tutors/TutorsFilters";
import TutorsGrid from "@/components/tutors/TutorsGrid";

export default function StudentTutors() {
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
      <TutorsHeader />

      <TutorsFilters
        subjects={subjectsMock}
        query={query}
        setQuery={setQuery}
        setSelectedSubject={setSelectedSubject}
      />

      <TutorsGrid tutors={filteredTutors} />
    </div>
  );
}

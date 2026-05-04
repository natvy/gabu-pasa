import FileCard from "@/components/cards/FileCard";
import { AcademicFile } from "@/types/file";
import { Tutor } from "@/types/tutor";

type Props = {
  files: AcademicFile[];
  tutors: Tutor[];
};

export default function FilesGrid({ files, tutors }: Props) {
  return (
    <section className="app-card p-4 md:p-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3">
        {files.map((file) => (
          <FileCard key={file.id} file={file} tutors={tutors} />
        ))}
      </div>
    </section>
  );
}

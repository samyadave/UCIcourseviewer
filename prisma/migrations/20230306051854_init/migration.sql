-- CreateTable
CREATE TABLE "school" (
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Dept" (
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "schoolName" TEXT
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "deptCode" TEXT NOT NULL,
    "schoolName" TEXT
);

-- CreateTable
CREATE TABLE "Section" (
    "crn" INTEGER NOT NULL,
    "instructors" TEXT[],
    "type" TEXT NOT NULL,
    "units" DOUBLE PRECISION NOT NULL,
    "days" TEXT[],
    "times" TEXT[],
    "building" TEXT[],
    "courseId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "school_name_key" ON "school"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Dept_code_key" ON "Dept"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Course_id_key" ON "Course"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Section_crn_key" ON "Section"("crn");

-- AddForeignKey
ALTER TABLE "Dept" ADD CONSTRAINT "Dept_schoolName_fkey" FOREIGN KEY ("schoolName") REFERENCES "school"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_deptCode_fkey" FOREIGN KEY ("deptCode") REFERENCES "Dept"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_schoolName_fkey" FOREIGN KEY ("schoolName") REFERENCES "school"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

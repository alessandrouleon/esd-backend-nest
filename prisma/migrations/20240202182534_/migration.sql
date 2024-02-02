-- CreateTable
CREATE TABLE "Lines" (
    "id" TEXT NOT NULL,
    "code" VARCHAR(24) NOT NULL,
    "stage" VARCHAR(24),
    "description" VARCHAR(256),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Lines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employees" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "registration" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "shift" VARCHAR(64) NOT NULL,
    "linesId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "userName" VARCHAR(64) NOT NULL,
    "password" TEXT NOT NULL,
    "email" VARCHAR(64) NOT NULL,
    "permission" VARCHAR(64) NOT NULL,
    "employeeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lines_code_key" ON "Lines"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Lines_description_key" ON "Lines"("description");

-- CreateIndex
CREATE UNIQUE INDEX "Employees_registration_key" ON "Employees"("registration");

-- CreateIndex
CREATE UNIQUE INDEX "Users_userName_key" ON "Users"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Employees" ADD CONSTRAINT "Employees_linesId_fkey" FOREIGN KEY ("linesId") REFERENCES "Lines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { ArrowRight, Eye, X } from "lucide-react";
import React, { useState } from "react";
import QuillRichTE from "@/components/ui/QuillRichTE";
import { Textarea } from "@/components/ui/textarea";
import LoadingBar from "@/components/LoadingBar";
import PreviewPage from "@/app/company/previewPage";
import { DatePickerWithRange } from "@/components/DateRangePicker";
import { addDays } from "date-fns";
import PageContainer from "@/components/layout/page-container";

const PostNewDrive = () => {
    // const [jobRoles, setJobRoles] = useState<string[]>([]);
    // const [currentJobRole, setCurrentJobRole] = useState<string>("");
    // const [formData, setFormData] = useState({
    //     companyName: "",
    //     companyOverview: "",
    //     stipend: "",
    //     salary: "",
    //     jobLocation: "",
    //     requirements: "",
    //     pointsToNote: "",
    // });

    const [jobRoles, setJobRoles] = useState<string[]>([
        "Sales Intern",
        "Business Development Executive",
        "MERN Developer",
    ]);

    const [currentJobRole, setCurrentJobRole] = useState<string>(
        "Sales Intern (7k-20k/month stipend for 6 months and a PPO of 6-10 LPA)"
    );

    const [formData, setFormData] = useState({
        companyName: "McKinley Rice",
        companyOverview:
            "McKinley Rice is conducting a virtual placement drive in our campus.",
        stipend: "7k-20k",
        salary: "6-10",
        jobLocation: "Noida | Pune",
        driveDate: {
            from: new Date(),
            to: addDays(new Date(), 0),
        },
        requirements: `
    <p>Positions:</p>
    <ol>
    <li>Excellent communication skills</li>
    <li>Basic understanding of sales principles</li>
    <li>Willingness to learn and adapt</li>
    </ol>
    `,
        pointsToNote: `
    NOTE: Please read about the company in detail and Job Description carefully.
    Only those students who are genuinely interested in this opportunity and are willing to join should fill.
    Will not entertain any last minute drop out cases. <p>Tentative Date of Drive: 20th September, 2024</p>`,
    });

    const [isPreviewing, setIsPreviewing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: any) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleQuillChange = (fieldName: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    const handleAddJobRole = () => {
        if (currentJobRole != "") {
            setJobRoles([...jobRoles, currentJobRole]);
            setCurrentJobRole("");
        }
    };

    const handlePreviewClick = () => {
        console.log(formData);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsPreviewing(true);
        }, 1000);
    };

    return (
        <PageContainer scrollable>
            <div className="mb-10 overflow-hidden">
                {isLoading ? (
                    <LoadingBar />
                ) : !isPreviewing ? (
                    <>
                        <section className="bg-gray-200 min-h-28 px-4 py-2 flex justify-between items-end rounded-lg">
                            <div className="flex items-center">
                                <div>
                                    <h1 className="text-4xl font-black">
                                        Post a New Opportunity
                                    </h1>
                                    <div className="text-md mt-1 text-gray-600 font-regular">
                                        <span>Placement Opportunity Setup Wizard</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="flex mt-4">
                            <section className="w-full flex flex-col gap-4 mt-4">
                                <div className="w-full flex flex-col gap-1">
                                    <Label htmlFor="companyName" className="text-lg font-bold">
                                        Company Name
                                    </Label>
                                    <Input
                                        type="text"
                                        placeholder="Ex: Amazon, Microsoft, Google"
                                        id="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        className="h-10"
                                    />
                                </div>

                                <div className="w-full flex flex-col gap-1">
                                    <Label htmlFor="driveDate" className="text-lg font-bold">
                                        Date of the Placement Drive
                                    </Label>
                                    {/* <Input
                                            type='text'
                                            placeholder='Ex: Amazon, Microsoft, Google'
                                            id='driveDate'
                                            value={formData.driveDate}
                                            onChange={handleInputChange}
                                            className='h-10'
                                        /> */}

                                    <DatePickerWithRange setFormData={setFormData} />
                                </div>

                                <div className="w-full flex flex-col gap-1">
                                    <Label htmlFor="companyName" className="text-lg font-bold">
                                        Overview
                                    </Label>
                                    <Textarea
                                        placeholder="A quick overview of the company"
                                        id="companyOverview"
                                        onChange={handleInputChange}
                                        value={formData.companyOverview}
                                    />
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-full flex flex-col gap-1">
                                        <Label htmlFor="stipend" className="text-lg font-bold">
                                            Stipend / Month
                                        </Label>
                                        <Input
                                            type="text"
                                            placeholder="Ex: 40k, 40-45k"
                                            id="stipend"
                                            value={formData.stipend}
                                            onChange={handleInputChange}
                                            className="h-10"
                                        />
                                    </div>
                                    <div className="w-full flex flex-col gap-1">
                                        <Label htmlFor="salary" className="text-lg font-bold">
                                            Salary (Annual CTC)
                                        </Label>
                                        <Input
                                            type="text"
                                            placeholder="Ex: 7LPA or 7-8LPA"
                                            id="salary"
                                            value={formData.salary}
                                            onChange={handleInputChange}
                                            className="h-10"
                                        />
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <Label htmlFor="jobRoles" className="text-lg font-bold">
                                        Job Roles Offered
                                    </Label>
                                    <div className="flex items-center gap-2">
                                        <Input
                                            type="text"
                                            placeholder="Ex: Associate Software Engineer, SDE, BA"
                                            value={currentJobRole}
                                            onChange={(e) => setCurrentJobRole(e.target.value)}
                                            id="jobRoles"
                                            className="h-10"
                                        />
                                        <Button
                                            variant="default"
                                            onClick={handleAddJobRole}
                                            className="h-full"
                                        >
                                            Add
                                        </Button>
                                    </div>
                                    <div className="flex items-center justify-start w-full mt-1 h-8">
                                        <span className="flex items-center justify-center font-bold">
                                            Selected:{" "}
                                        </span>
                                        <div className="flex items-center gap-1 ml-4">
                                            {jobRoles.map((role, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center justify-between gap-2 bg-blue-200 text-sm rounded-full p-1 pl-2"
                                                >
                                                    <span>{role}</span>
                                                    <div
                                                        className="p-1 flex items-center justify-center aspect-square rounded-full hover:bg-blue-500 cursor-pointer"
                                                        onClick={() =>
                                                            setJobRoles(
                                                                jobRoles.filter((_, i) => i !== index)
                                                            )
                                                        }
                                                    >
                                                        <X size={12} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <Label htmlFor="jobLocation" className="text-lg font-bold">
                                        Job Location
                                    </Label>
                                    <Input
                                        type="text"
                                        placeholder="Ex: Chandigarh, Delhi, Pune"
                                        id="jobLocation"
                                        value={formData.jobLocation}
                                        onChange={handleInputChange}
                                        className="h-10"
                                    />
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <Label htmlFor="requirements" className="text-lg font-bold">
                                        Requirements
                                    </Label>
                                    <p className="text-sm font-medium">
                                        Mention job role requirements for each role below.
                                    </p>
                                    <QuillRichTE
                                        id="requirements"
                                        onChange={(value: string) => handleQuillChange("requirements", value)}
                                    />
                                </div>
                                <div className="w-full flex flex-col gap-1 mt-8">
                                    <Label htmlFor="pointsToNote" className="text-lg font-bold">
                                        Points to Note
                                    </Label>
                                    <p className="text-sm font-medium">
                                        Important points to note regarding the job opportunity.
                                    </p>
                                    <QuillRichTE
                                        id="pointsToNote"
                                        onChange={(value: string) => handleQuillChange("pointsToNote", value)}
                                    />
                                </div>

                                <div className="w-full flex flex-col gap-1 mt-8">
                                    <Label htmlFor="jdDocuments" className="text-lg font-bold">
                                        Upload Job Description
                                    </Label>
                                    <p className="text-sm font-medium">
                                        Upload JDs for all the job roles here.
                                    </p>
                                    <Input
                                        type="file"
                                        id="jdDocuments"
                                        className="h-10 items-center justify-start cursor-pointer"
                                        multiple
                                    />
                                </div>

                                <div className="w-full flex justify-end items-center gap-1 mt-6">
                                    <Button
                                        variant="default"
                                        className="font-bold text-lg"
                                        onClick={handlePreviewClick}
                                    >
                                        <Eye size={22} />
                                        <span className="pl-2">Preview</span>
                                    </Button>
                                </div>
                            </section>
                            <aside className="w-1/4 p-4">
                                <h1 className="font-black text-lg">Checklist</h1>
                                <ul className="mt-2 ml-2">
                                    {[
                                        "Company Name",
                                        "Stipend & Salary",
                                        "Job Location",
                                        "Key Requirements",
                                        "Points To Note",
                                        "Job Descriptions",
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center pb-2 justify-start"
                                        >
                                            <ArrowRight size={12} />
                                            <a
                                                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                                                className="ml-1 underline-offset-2 hover:underline transition-all duration-700"
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                        </section>
                    </>
                ) : (
                    <PreviewPage
                        formData={{
                            companyName: formData.companyName,
                            jobLocation: formData.jobLocation,
                            driveDate: formData.driveDate.from,
                            driveDuration: Math.max(1, Math.ceil((formData.driveDate.to.getTime() - formData.driveDate.from.getTime()) / (1000 * 60 * 60 * 24)) + 1),
                            requirements: formData.requirements,
                            pointsToNote: formData.pointsToNote,
                            salary: formData.salary,
                            companyOverview: formData.companyOverview,
                        }}
                        jobRoles={jobRoles}
                        setPreview={setIsPreviewing}
                    />
                )}
            </div>
        </PageContainer>
    );
};

export default PostNewDrive;

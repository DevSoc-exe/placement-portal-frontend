import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Banknote, Calendar, Download, MapPin, Upload } from 'lucide-react';
import React from 'react';

interface CompanyPageProps {
    formData: {
        companyName: string;
        jobLocation: string;
        driveDate: Date;
        driveDuration: number;
        requirements: string;
        pointsToNote: string;
        salary: string;
        companyOverview: string;
    };
    jobRoles: string[];
    onPublish?: any;
    setPreview: any
}



const PreviewPage: React.FC<CompanyPageProps> = ({ formData, jobRoles, onPublish, setPreview }) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
    const from = formData.driveDate;
    const to = formData.driveDate instanceof Date ? formData.driveDate : formData.driveDate;
    const fromDateString = from.toLocaleDateString('en-GB', options);
    const toDateString = to.toLocaleDateString('en-GB', options);

    const handlePreviewClick = () => {
        console.log(formData);
        setPreview(false)
    };
    return (
        <div>
            <section className="bg-gray-200 min-h-28 px-4 py-2 flex justify-between items-end rounded-lg">
                <div className="flex flex-col gap-6 items-start justify-between">
                    {/* <img src="/path/to/logo.png" alt="Company Logo" className="h-10 mr-2" /> */}
                    <Button onClick={handlePreviewClick} className='mt-1'>
                        <ArrowLeft size={16} />
                        <span className='pl-2'>Back</span>
                    </Button>
                    <div>
                        <h1 className="text-4xl font-black">{formData.companyName} (Preview)</h1>
                        <div className='text-md text-gray-600 font-regular'>
                            <span>{jobRoles.length > 1 ? "Miltiple Roles" : jobRoles[0]}</span> | <span>{formData.salary}</span>
                        </div>
                    </div>
                </div>
                <div className='h-full border flex gap-2 items-end justify-end'>
                    <Button disabled>
                        <span className='flex gap-2 items-center justify-center'>
                            <span>Job Description</span><Download size={15} strokeWidth={3} />
                        </span>
                    </Button>
                    <Button disabled>Apply</Button>
                </div>
            </section>

            <section className="flex mt-4">
                <aside className="w-1/6 p-4">
                    <h1 className="font-black text-lg">Navigate</h1>

                    <ul className="mt-2 ml-2">
                        <li className='flex items-center pb-2 justify-start'>
                            <ArrowRight size={12} />
                            <a href="#overview" className='ml-1 underline-offset-2 hover:underline transition-all duration-700'>Overview</a>
                        </li>
                        <li className='flex items-center pb-2 justify-start'>
                            <ArrowRight size={12} />
                            <a href="#jobroles" className=' ml-1 underline-offset-2 hover:underline transition-all duration-700'>Job Title</a>
                        </li>
                        <li className='flex items-center pb-2 justify-start'>
                            <ArrowRight size={12} />
                            <a href="#responsibilites" className='ml-1 underline-offset-2 hover:underline transition-all duration-700'>Key Responsibilities</a>
                        </li>
                        <li className='flex items-center pb-2 justify-start'>
                            <ArrowRight size={12} />
                            <a href="#pointsToNote" className='ml-1 underline-offset-2 hover:underline transition-all duration-700'>Points To Note</a>
                        </li>
                    </ul>
                </aside>

                <section className="flex-1 py-4 ml-4">
                    <article className='flex flex-row items-center justify-around gap-4 bg-gray-200 rounded-lg'>
                        <div className='flex flex-col w-1/5 items-start justify-center py-4 px-2'>
                            <div className='flex items-center justify-center gap-2'>
                                <MapPin size={16} color='gray' /> <span className='text-md font-medium text-gray-600'>Location</span>
                            </div>
                            <span className='text-xl font-bold'>{formData.jobLocation}</span>
                        </div>

                        <div className='h-5 border border-gray-400 rounded-full'></div>
                        <div className='flex flex-col w-1/5 items-start justify-center py-4 px-2'>
                            <div className='flex items-center justify-center gap-2'>
                                <Banknote size={18} color='gray' /> <span className='text-md font- text-gray-600'>CTC (Annual)</span>
                            </div>
                            <span className='text-xl font-bold'>{formData.salary} LPA</span>
                        </div>
                        <div className='h-5 border border-gray-400 rounded-full'></div>
                        <div className='flex flex-col w-1/5 items-start justify-center py-4 px-2'>
                            <div className='flex items-center justify-center gap-2'>
                                <Calendar size={16} color='gray' /> <span className='text-md font-medium text-gray-600'>Date of Drive</span>
                            </div>
                            {
                                from.getMonth() === to.getMonth() && from.getFullYear() === to.getFullYear() ?
                                    <span className='text-xl font-bold'>{fromDateString}</span> :
                                    <span className='text-xl font-bold'>{fromDateString}-{toDateString}</span>
                            }
                        </div>
                    </article>
                    <article className='mt-4 w-full flex flex-col gap-6'>
                        <div className='flex flex-col gap-1'>
                            <h2 className='font-bold text-gray-700' id='overview'>Overview</h2>
                            <p className='text-justify text-gray-600 font-regular'>
                                {formData.companyOverview}
                            </p>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <h2 className='font-bold text-gray-700' id='jobroles'>Job Title</h2>
                            <ul className='list-disc pl-5 text-justify text-gray-600 font-regular'>
                                {jobRoles.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        </div>


                        <div className='flex flex-col gap-1'>
                            <h2 className='font-bold text-gray-700' id='responsibilites'>Key Responsibilities</h2>
                            <div className='text-justify text-gray-600 font-regular' dangerouslySetInnerHTML={{ __html: formData.requirements }} />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <h2 className='font-bold text-gray-700' id='pointsToNote'>Points To Note</h2>
                            <div className='text-justify text-gray-600 font-regular' dangerouslySetInnerHTML={{ __html: formData.pointsToNote }}>
                            </div>
                        </div>

                        <div className='w-full flex justify-end items-center gap-1 mt-6'>

                            <Button
                                variant="default"
                                className='font-bold text-lg'
                                onClick={onPublish}
                            >
                                <Upload size={22} />
                                <span className='pl-2'>Publish Opportunity</span>
                            </Button>

                        </div>
                    </article>
                </section>
            </section>
        </div>
    );
};

export default PreviewPage;

import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utilities/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();

    const job = jobs.find(job => job.id == parseInt(id));

    const handleApplyJob = () => {
        saveJobApplication(parseInt(id));
        toast("You Have Applied Successfully.!");
    }

    return (
        <div>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border md:col-span-3">
                    <div className="text-3xl">
                        <h2>Job Details of: {job.job_title} </h2>
                        <p>{job.company_name}</p>
                    </div>
                </div>
                <div className="border md:col-span-1">
                    <h2 className="border">Side things</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;
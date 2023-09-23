import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);


    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);

    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl">Featured Jobs: {jobs.length}</h2>
                <p>Explore Thousands of job with all the information you need. It's your future.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={ dataLength === jobs.length ? 'hidden' : '' }>
                <button
                    onClick={() => setDataLength(jobs.length)}
                    className="btn btn-primary">Show All DAta</button>
            </div>
        </div>
    );
};

export default FeturedJobs;
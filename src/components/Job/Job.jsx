import { BiCurrentLocation } from 'react-icons/bi'
import { AiFillDollarCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Job = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    // this is not the best way to load show all data

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className='px-5 text-[#7E90FE] py-2 font-extrabold border rounded border-[#7E90FE] mr-4'>{remote_or_onsite}</button>
                    <button className='px-5 text-[#7E90FE] py-2  font-extrabold border rounded border-[#7E90FE] mr-4'>{job_type}</button>
                </div>
                <div className='mt-4 flex'>
                    <h2 className='flex'> <BiCurrentLocation className='text-2xl mr-2'></BiCurrentLocation> {location} </h2>
                    <h2 className='text-xl flex'>
                        <AiFillDollarCircle className='text-2xl'></AiFillDollarCircle> {salary}
                    </h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;
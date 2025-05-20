import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Css
import "./Agent.scss";

// Image
import FilterIcon from '../../../assets/images/filter_icon.svg';
import SearchInput from '../../../assets/images/search-input.svg';
import AgentButton from '../../../assets/images/home/landing/agent_btn.png';

// Static-Data
import { AgentData, CountryData, LatestNewsData, TestimonialsData } from '../../../constants/data/Data';

// Component-Pagination
import Pagination from '../../../components/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { reqToGetAllAgent } from '../../../reduxToolkit/services/user/default/agentListServices';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const Agent = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [agentList, setAgentList] = useState([])
    const [search, setSearch] = useState("")
    const [debounceTimer, setDebounceTimer] = useState(null);

    const loader = useSelector((state) => state.allAgent.loader);

    const handleGetAllAgentList = async () => {
        const payload = {
            search: search,
            filter: ""
        };
        const res = await dispatch(reqToGetAllAgent(payload));
        setAgentList(res?.payload?.data?.data || []);
    };

    useEffect(() => {
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        const timer = setTimeout(() => {
            handleGetAllAgentList();
        }, 500);

        setDebounceTimer(timer);

        return () => clearTimeout(timer);
    }, [search]);

    return (
        <>

            {/* ------ Agents Start ------ */}
            <section className='agent top_agent'>
                <div className="container">
                    <div className="top">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-6">
                                <h1>
                                    Top Agents
                                </h1>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center justify-content-between">
                                {/* <div className=''> */}
                                <button type='button' className="filter_btn">
                                    <img src={FilterIcon} alt="" className='img-fluid me-3' />
                                    Filter
                                </button>

                                <div className="input-group">
                                    <span className='icon'>
                                        <img src={SearchInput} alt="" className='img-fluid' />
                                    </span>

                                    <input
                                        type="text"
                                        id="search"
                                        name="search"
                                        className="form-control"
                                        placeholder="What type of agent you looking for ?"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="second">
                        <div className="row g-5">

                            {loader ? (
                                // Show skeleton while loading
                                Array.from({ length: 8 }).map((_, index) => (
                                    <div className="col-lg-4 col-xl-3" key={index}>
                                        <div className="box text-center">
                                            <Skeleton circle height={100} width={100} className="mb-3" />
                                            <Skeleton height={20} width={`60%`} className="mb-2" />
                                            <Skeleton height={15} width={`40%`} className="mb-3" />
                                            <Skeleton height={40} width={100} />
                                        </div>
                                    </div>
                                ))
                            ) : agentList?.length > 0 ? (
                                // Show real data after loading
                                agentList.map((i, index) => (
                                    <div className="col-lg-4 col-xl-3" key={index}>
                                        <div className="box text-center">
                                            <div className="dot"></div>
                                            <div className="agent_img">
                                                <img src={i.profile} alt="" className='img-fluid object-fit-cover' />
                                            </div>
                                            <div className="info">
                                                <div className="name">{i.name}</div>
                                                <div className='expe'>Exp: {i.experience} Years</div>
                                            </div>
                                            <button
                                                type='button'
                                                className='agent_btn'
                                                onClick={() => navigate(`/user/agent-detail/${i.id}`)}
                                            >
                                                <img src={AgentButton} alt="" className='img-fluid' />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                // Show "no data" message
                                <div className="text-center">No agents found.</div>
                            )}


                        </div>
                    </div>

                    <Pagination />

                </div>
            </section>
            {/* ------ Agents End ------ */}

        </>
    )
}

export default Agent
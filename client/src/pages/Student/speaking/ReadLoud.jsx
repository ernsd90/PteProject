import React, { useEffect,useState  } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { ApiUrl,SECRET_KEY } from '../../../config';
import PracticeLayout from '../../../layouts/PracticeLayout';
import { useAuth } from '../../../utils/AuthContext';
import LeftSidebar from '../common/LeftSidebar';
import TopBar from '../common/TopBar';
import  MicroPhone  from  '../../../Dictaphones.js'


const secretKey = CryptoJS.enc.Hex.parse(CryptoJS.SHA256('4bhbJ9a8sFhGwY5qSPEY6J8MBYcUDen7').toString().slice(0, 64));


const decrypt = (encryptedText) => {
    const [ivHex, encryptedHex] = encryptedText.split(':');
    const iv = CryptoJS.enc.Hex.parse(ivHex);
    const encrypted = CryptoJS.enc.Hex.parse(encryptedHex);
    const decrypted = CryptoJS.AES.decrypt({ ciphertext: encrypted }, secretKey, {
      iv: iv,
      mode: CryptoJS.mode.CTR,
      padding: CryptoJS.pad.NoPadding
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  };


const ReadLoud = () => {

    const [readLoud, setReadLouds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [itemsPerPage] = useState(12);
    const [selectedEntry, setSelectedEntry] = useState(null);
    const [micPermission, setMicPermission] = useState(false); // State for microphone permission

    
    useEffect(() => {
      const fetchReadLouds = async (page) => {
        try {
        const authToken = localStorage.getItem('authToken');
          const response = await axios.get(ApiUrl+'api/readlouds',{
            headers: {
                Authorization: `Bearer ${authToken}`
            },
            params: {
                page,
                limit: itemsPerPage
              }
          }); // Adjust the URL as necessary
          const decryptedResults = response.data.results.map((result) => ({
            ...result,
            title: decrypt(result.title),
            content: decrypt(result.content)
          }));
  
          setReadLouds(decryptedResults);
          setTotalPages(Math.ceil(response.data.total / itemsPerPage));
          setLoading(false);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                // Token is invalid or expired
                localStorage.removeItem('token');
                window.location.href = '/login'; // Redirect to login page
              } else {
                setError(error);
                setLoading(false);
              }
        }
      };
  
      fetchReadLouds(currentPage);
    }, [currentPage, itemsPerPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleEntryClick = (entry) => (e) => {
        e.preventDefault();
        setSelectedEntry(entry);
        //console.log('Selected entry:', entry);
      };

      const checkMicPermission = async () => {
        try {
          await navigator.mediaDevices.getUserMedia({ audio: true });
          setMicPermission(true);
        } catch (error) {
          setMicPermission(false);
        }
      };
    
      useEffect(() => {
        checkMicPermission();
      }, []);



    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }


      const baseUrl = '/student/speaking/read_aloud';

    return (
        <PracticeLayout>
             <>
                <div className="rbt-lesson-area bg-color-white">
                    <div className="rbt-lesson-content-wrapper">
                    <LeftSidebar  
                        title="Read Loud" 
                        baseUrl={baseUrl} 
                        data={readLoud} 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        onEntryClick={handleEntryClick}
                    />
                    <div className="rbt-lesson-rightsidebar overflow-hidden">
                        <TopBar title="Read Loud" description="Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud." />

                        <div className="inner">
                        <div className="content">
                            {selectedEntry ? (
                            <form id="quiz-form" className="quiz-form-wrapper">
                            {/* Start Single Quiz  */}

                            
                                <div id="question-1" className="question">
                                    <div className="quize-top-meta">
                                        <div className="quize-top-left">
                                            <span>
                                            <strong># </strong>{<span>{selectedEntry.title}</span>}
                                            </span>
                                            <span>
                                            Attempts Allowed: <strong>1</strong>
                                            </span>
                                        </div>
                                        <div className="quize-top-right">
                                            <span>
                                            Time remaining: <strong>No Limit</strong>
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="rbt-single-quiz">
                                    <h4></h4>

                                    <div className="row g-3 mt--10">
                                        <div className="col-lg-12">
                                        {selectedEntry.content ? (
                                            <p className="rbt-checkbox-wrapper mb--5">
                                                {selectedEntry.content}
                                            </p> 
                                            ) : (
                                                <div>
                                                <p>No content available for this entry.</p>
                                                {micPermission ? (
                                                        <MicroPhone />
                                                ) : (
                                                    <p>Microphone permission not granted.</p>
                                                )}
                                                </div>
                                        )}
                                        </div>
                                    
                                    </div>
                                    </div>
                                </div>
                            
                            {/* Start Single Quiz  */}
                      
                                <div className="rbt-quiz-btn-wrapper mt--30">
                                    <button
                                    className="rbt-btn bg-primary-opacity btn-sm"
                                    id="prev-btn"
                                    type="button"
                                    >
                                    Previous
                                    </button>
                                    <button
                                    className="rbt-btn bg-primary-opacity btn-sm"
                                    id="next-btn"
                                    type="button"
                                    >
                                    Next
                                    </button>
                                    <a
                                    href="lesson-quiz-result.html"
                                    className="rbt-btn btn-gradient btn-sm"
                                    id="submit-btn"
                                    >
                                    Submit
                                    </a>
                                </div>
                            </form>
                            ) : (
                                <div>
                                  {/* Content when selectedEntry is false */}
                                  <p>No Entry Selected</p>
                                </div>
                              )}
                        </div>

                        {micPermission ? (
                            <p>Microphone permission granted.</p>
                            ) : (
                            <p>Microphone permission not granted.</p>
                        )}

                        </div>
                        


                    </div>
                    </div>
                </div>
                <div className="rbt-progress-parent">
                    <svg
                    className="rbt-back-circle svg-inner"
                    width="100%"
                    height="100%"
                    viewBox="-1 -1 102 102"
                    >
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                    </svg>
                </div>
                
                </>

        </PracticeLayout>
    );
};

export default ReadLoud;

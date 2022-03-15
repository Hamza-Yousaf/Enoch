//@ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { eventStatus, monthNames } from "./Events/Manage/ManagePageComponent";
import { GET_OTHER_USER_QUERY } from "../../../graphql/queries";
import { useMutation, useQuery, gql } from "@apollo/client";
import { format } from "date-fns";
import { SHARE_EVENT_TO_PUBLIC_MUTATION } from "../../../graphql/mutattions/shareEventsToPublic";
import { SHARE_EVENT_TO_FOLLOWERS_MUTATION } from "../../../graphql/mutattions/shareEventToFollowers";
import withApollo from "../../../lib/withApollo";
import { getDataFromTree } from "@apollo/client/react/ssr";
import Cookies from "js-cookie";
import { ARTICLE_POST_MUTATION } from "../../../graphql/mutattions/createArticlePost";
import {
  POSTS_QUERY,
  USER_POSTS,
  Poll_Query,
} from "../../../graphql/Queries/homepostQuery";
import dynamic from "next/dynamic";
import { PHOTO_POST, VIDEO_POST, DOC_POST } from "../../../graphql/mutattions/homePost";
import dynamic from "next/dynamic";
const PollFinal = dynamic(() => import("./Create-Post-Components/PollFinal"));
const DocumentFinal = dynamic(() => import("./Create-Post-Components/DocumentFinal"));
const Celebrationstep1 = dynamic(() => import("./Create-Post-Components/Celebrationstep1"));
import {CREATE_A_POLL_QUESTION} from '../../../graphql/mutattions/CreateApoll'

interface Props {
  loggedInUser: any;
}

const CreatePost: React.FC<Props> = () => {
  const [showPostAsDropdown, setPostAsDropDown] = useState(false);
  const [showWhoShouldViewModal, setShowWhoShouldViewModal] = useState(false);
  const [whoCanSeePost, setWhoCanSeePost] = useState("whole_public");
  const [postAs, setPostAs] = useState("");
  const [communityToShareTo,setCommunityToShareTo ] = useState("");
  const [event, setEvent] = useState(null);
  const [organizerAvatar, setOrganizerAvatar] = useState("");
  const [organizer, setOrganizer] = useState(null);
  const [postText, setPostText] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [operation, setOperation] = useState("article-post");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImage2, setSelectedImage2] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedVideo2, setSelectedVideo2] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState("");
  const [dropDownProfileSharing, setDropDownProfileSharing] = useState(false);
  const [profileHit, setProfileHit] = useState("Your profile");
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [pollDone, setPollDone] = useState(false)
  // @ts-ignore
  const { CKEditor, Editor } = editorRef.current || {};
  const [progressIncrease, setProgressIncrease] = useState("");
  const [documentDone, setDocumentDone] = useState(true);
  const [trigerOnDone, setTrigerOnDone] = useState(false);
  const [newOption, setNewOption] = useState(false);
  const [newOption2, setNewOption2] = useState(false);
  const [newOption3, setNewOption3] = useState(false);
  const [newOption4, setNewOption4] = useState(false);
  const [pollInputs, setPollInputs] = useState({
    pollQuestion:"",
    OptionA:"",
    OptionB:"",
    OptionC:"",
    OptionD:"",
    voteDurationTimeLeft:"",

  });
  const [imageDescription, setImageDescription] = useState({
    ImageTitle:"",
    ImageMessage:""
  });
  const [VideoDescription, setVideoDescription] = useState({
    VideoTitle:"",
    VideoMessage:""
    
  })
  const [docDes, setDocDes] = useState({
    DescriptedDocument:""
  })
  const [MainPost, setMainPost] = useState("")
  const handleDocumentDesChange = (e: any) => {
    const newDocDes = {...docDes}
    newDocDes[e.target.name] = e.target.value
    setDocDes(newDocDes)
  };

  // imageMessageChanger 

  const handleChangeImage = (e:any) => {
    const newImageTitle = {...imageDescription}
    newImageTitle[e.target.name] = e.target.value
    setImageDescription(newImageTitle);
  }
  const handleVideoOnChange = (e:any) => {
    const newImageTitle = {...VideoDescription}
    newImageTitle[e.target.name] = e.target.value
    setVideoDescription(newImageTitle);
    console.log(newImageTitle)
  }

  useEffect(() => {
    // @ts-ignore
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      Editor: require("ckeditor5-custom-build/build/ckeditor"),
    };
    setEditorLoaded(true);

    if(selectedImage != "" && selectedVideo != "" && selectedDocument != ""){
      
      setDocumentDone(false)
    }
    else if(trigerOnDone){
      setDocumentDone(true)
    }
    
    else{
      setDocumentDone(true)
    }

    if(selectedDocument != ""){
      setTimeout(() => {
        let i;
      for (i = 1; i <= 10000000; i++) {
        if(i <= 1000){
          
          let number = "w-" + 30;
        setProgressIncrease(number);
        
        }
        else if(i <= 10000000){
          let number = "w-" + 50;
         setProgressIncrease(number);
        }
      }
    
      },1000)
      setTimeout(() => {
        let i;
      for (i = 1; i <= 10000000; i++) {
        
        if(i <= 10000000){
          let number = "w-" + 100;
         setProgressIncrease(number);
        }
      }
    
      },2000)
      
    }
    // progress bar width changer
   
  }, [selectedDocument]);

  useEffect(() => {
    if (Cookies.get("loggedInUser")) {
      setLoggedInUser(JSON.parse(Cookies.get("loggedInUser")));
      setPostAs(JSON.parse(Cookies.get("loggedInUser")).userName);
    }
  }, [Cookies.get("loggedInUser")]);


  // pdfDone
  const HandleDocumentDone = (e) => {
    
     

      setInterval(() => {
        
      }, 1000);
      // setTimeout(() => {
      //   for (i = 1; i <= 100; i++) {
      //     let number = "w-" + i;
      //     setProgressIncrease(number);
      //   }
      // }, 1000);
      setTimeout(() =>{
        setDocumentDone(true);
        setOperation("article-post");
        setTrigerOnDone(true);
      },1000)
       
      
    
  }

  const dispatch = useDispatch();
  const router = useRouter();

  const eventId = router.query.eventId;

  const togglePostAs = () => {
    setPostAsDropDown(!showPostAsDropdown);
  };

  const toggleShouldView = () => {
    setShowWhoShouldViewModal(!showWhoShouldViewModal);
  };
// poll Mutation


  const CreateApollMutationData= useMutation(CREATE_A_POLL_QUESTION);

  const createArticlePostMutationData = useMutation(ARTICLE_POST_MUTATION, {
    refetchQueries: [
      {
        query: POSTS_QUERY,
        variables: {
          offset: 0,
          limit: 5,
        },
      },
    ],
  });

  const createArticlePost = createArticlePostMutationData[0];
  const sendingPost = createArticlePostMutationData[1].loading;

  const CreatePoll = CreateApollMutationData[0];
  const sendingPoll = CreateApollMutationData[1].loading;

  // poll mutation pass

  const createPollMutation = () => {
    
      CreatePoll({
        variables:{
          pollQuestion: pollInputs.pollQuestion,
          title: postText,
          postingAs:postAs,
          optionA: pollInputs.OptionA,
          optionB: pollInputs.OptionB,
          optionC: pollInputs.OptionC,
          optionD: pollInputs.OptionD,
          voteDurationTimeLeft: pollInputs.voteDurationTimeLeft,
          whoCanSeePost:whoCanSeePost,
        },
      })
      .then((res) => {
        console.log(res);
        
          router.push("/feeds");
        
      })
      .catch((err) => {
        console.log(err);
      });
     
      console.log("pollquestion", CreatePoll)
     }
  

  const createPostArticle = () => {
      createArticlePost({
        variables: {
          whoCanSeePost: whoCanSeePost,
          postingAs: postAs,
          articlepostinput: postText,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data?.createPostArticle) {
            router.push("/feeds");
          }
        })
        .catch((err) => {
          console.log(err);
        });
  };
  // console.log(operation,postAs, whoCanSeePost, postText, pollInputs);

  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  const videoChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedVideo(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };
  const handleDocumentFileChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedDocument(e.target.files[0]);
      console.log("selectedDocuments",e.target.files[0]);
      
    }
    
  };

  const upLoadVideoMuationData = useMutation(VIDEO_POST, {
    refetchQueries: [
      {
        query: POSTS_QUERY,
        variables: {
          offset: 0,
          limit: 5,
        },
      },
    ],
  });

  const docUploadMutation = useMutation(DOC_POST, {
    refetchQueries: [
      {
        query: POSTS_QUERY,
        variables: {
          offset: 0,
          limit: 5,
        },
      },
    ],
  })
  const uploadDoc = docUploadMutation[0];
  const sendingDoc = docUploadMutation[1].loading;

  const uploadVideo = upLoadVideoMuationData[0];
  const sendingVideo = upLoadVideoMuationData[1].loading;

  const upLoadDataMuationData = useMutation(PHOTO_POST, {
    refetchQueries: [
      {
        query: POSTS_QUERY,
        variables: {
          offset: 0,
          limit: 5,
        },
      },
    ],
  });

  const handleDocSubmit = () => {
    uploadDoc({
      variables: {
        file: selectedDocument,
        whoCanSeePost: whoCanSeePost,
        postingAs: postAs,
        title: docDes.DescriptedDocument,
        text: docDes.DescriptedDocument,
      },
    })
    .then((resp) => {
      router.push("/feeds");
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const handleVideoSubmit = () => {
    console.log("ok...2");
    uploadVideo({
      variables: {
        file: selectedVideo,
        whoCanSeePost: whoCanSeePost,
        postingAs: postAs,
        title: VideoDescription.VideoTitle,
        text: VideoDescription.VideoMessage,
      },
    })
      .then((resp) => {
        console.log(resp);
        router.push("/feeds");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const upload = upLoadDataMuationData[0];
  const sendingPhoto = upLoadDataMuationData[1].loading;

  const handleFileSubmit = () => {
    console.log("ok...");
    upload({
      variables: {
        file: selectedImage,
        whoCanSeePost: whoCanSeePost,
        postingAs: postAs,
        title: imageDescription.ImageTitle,
        text: imageDescription.ImageMessage,
      },
    })
      .then((resp) => {
        console.log(resp);
        router.push("/feeds");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleOnChangeTheMainPostBar = () => {

  }
  // image upload back button
  const handleImageBackButton = () => {
    setOperation("article-post");
    setSelectedImage("");
    setSelectedVideo("");
    setSelectedDocument("");
    setTrigerOnDone(false)
  }
  const HandleImageUpload2 = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      for(let i = 0; i < e.target.files.length; i++){
        setSelectedImage2([...selectedImage2,e.target.files[i]]);
        console.log(e.target.files[i]);
      }
      
      
    }
  }
  const handleOnChangeVideo2 = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      for(let i = 0; i < e.target.files.length; i++){
        setSelectedVideo2([...selectedVideo2,e.target.files[i]]);
        console.log(e.target.files[i]);
      }
      
      
    }
  }
  // poll handeling
  const HandlePollDone = () => {
    setPollDone(true);
    setOperation("article-post");
  }
  const cancelClickDoc = (e:any) => {
    setSelectedDocument(e)
    console.log({selectedDocument})
  }
  const handleOptionClick = (e:any) => {
    setNewOption(true);
    
  }
  const handleOptionClick2 = (e:any) => {
    setNewOption2(true);
  }
  
  const handlePollValueChange =(e) => {
    const newPollValue = {...pollInputs}
    newPollValue[e.target.name] = e.target.value;
    setPollInputs(newPollValue); 
    
  }
   
  return (
    <div className="row">
      <div className="ezl-dashboard-container">
        <div className="posting-steps-block">
          <div className="posting-steps-block-left">
            {(operation !== "photo-post" &&
              operation !== "video-post" &&
              operation !== "document-post" &&  
              operation !== "poll-post" && 
              operation !== "celeb-post" &&<h2>Create Post</h2>) ||
              (operation === "photo-post" && <h2>Share a photo</h2>) ||
              (operation === "poll-post" && <h2>Share a Poll</h2>) ||
              (operation === "celeb-post" && <h2>Select an option</h2>) ||
              (operation === "video-post" && <h2>Share a video</h2>) ||
              (operation === "document-post" && <h2>Share a document</h2>)}

            <div>
              {operation != "photo-post" &&
                operation != "video-post" &&
                operation != "document-post" &&
                operation != "poll-post" && operation != "celeb-post" && (
                  <div className="posting-steps-dropbox-block">
                    <div className="posting-steps-dropbox">
                      <a
                        href="#"
                        className="posting-steps-dropbox-input"
                        onClick={togglePostAs}
                      >
                        <span>
                          <img
                            src="images/postInfo.png"
                            className="img-fluid"
                            alt="icon"
                          />
                        </span>
                        {postAs}
                      </a>
                      <div className="post-user-modal-block">
                        <div
                          id="post-user-modal"
                          className={
                            showPostAsDropdown
                              ? "modal fade open"
                              : "nodal fade"
                          }
                          style={
                            showPostAsDropdown
                              ? {
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }
                              : {
                                  display: "none",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }
                          }
                        >
                          {/* <!-- Modal content --> */}
                          <div className="modal-content post-user-modal-content">
                            <span className="close">
                              <img
                                onClick={togglePostAs}
                                src="images/post-close.png"
                                alt="close"
                                className="img-fluid"
                              />
                            </span>
                            <h2>Posting as a</h2>
                            <div className="post-user-modal-list">
                              <ul>
                                <li
                                  onClick={() => {
                                    setPostAs(loggedInUser.userName);
                                    togglePostAs();
                                  }}
                                >
                                  <span>
                                    <img
                                      src={
                                        loggedInUser?.profileImage ||
                                        "images/RobertRosePic-event.png"
                                      }
                                      className="img-fluid"
                                      alt="pic"
                                    />
                                  </span>{" "}
                                  {loggedInUser?.userName}
                                </li>
                                <li
                                  onClick={() => {
                                    togglePostAs();
                                    setPostAs("88mph");
                                  }}
                                >
                                  <span>
                                    <img
                                      src="images/community-icon4.png"
                                      className="img-fluid"
                                      alt="pic"
                                    />{" "}
                                  </span>{" "}
                                  88mph
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="posting-steps-dropbox">
                      {whoCanSeePost === "whole_public" && (
                        <a
                          onClick={toggleShouldView}
                          href="#"
                          className="posting-steps-dropbox-input"
                        >
                          <span>
                            <img
                              src="images/Globe2.png"
                              className="img-fluid"
                              alt="icon"
                            />
                          </span>
                          Anyone
                        </a>
                      )}
                      {whoCanSeePost === "whole_public+Twitter" && (
                        <a
                          onClick={toggleShouldView}
                          href="#"
                          className="posting-steps-dropbox-input"
                        >
                          <span>
                            <img
                              src="images/Globe2.png"
                              className="img-fluid"
                              alt="pic"
                            />
                          </span>
                          Anyone+Twitter
                        </a>
                      )}
                      {whoCanSeePost === "followers_only" && (
                        <a
                          onClick={toggleShouldView}
                          href="#"
                          className="posting-steps-dropbox-input"
                        >
                          <span>
                            <img
                              src="images/who-see.png"
                              className="img-fluid"
                              alt="pic"
                            />
                          </span>
                          Following Only
                        </a>
                      )}
                      {whoCanSeePost === "community" && (
                        <a
                          onClick={toggleShouldView}
                          href="#"
                          className="posting-steps-dropbox-input"
                        >
                          <span>
                            <img
                              src="images/who-coomunity.png"
                              className="img-fluid"
                              alt="pic"
                            />
                          </span>
                          {communityToShareTo}
                        </a>
                      )}
                      <div className="post-user-modal-block">
                        {
                          <div
                            id="post-user-modal2"
                            className={
                              showWhoShouldViewModal
                                ? "modal fade open"
                                : "modal fade"
                            }
                            style={
                              showWhoShouldViewModal
                                ? {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }
                                : {}
                            }
                          >
                            {/* <!-- Modal content --> */}
                            <div className="modal-content post-user-modal-content">
                              <span className="close">
                                <img
                                  onClick={toggleShouldView}
                                  src="images/post-close.png"
                                  alt="close"
                                  className="img-fluid"
                                />
                              </span>
                              <h2>Who can see your post?</h2>
                              <p className="mb-4">
                                Your post will be visible on feed, on your
                                profile and in search results
                              </p>
                              <div className="post-visible-modal-list">
                                <ul>
                                  <li>
                                    <div
                                      onClick={() =>
                                        setWhoCanSeePost("whole_public")
                                      }
                                      className="post-visible-left"
                                    >
                                      <div className="mr-2">
                                        <img
                                          src="images/Globe2.png"
                                          className="img-fluid"
                                          alt="pic"
                                        />
                                      </div>
                                      <div>
                                        <h3>Anyone</h3>
                                        <p>Anyone on or off Enoch</p>
                                      </div>
                                    </div>
                                    <div className="post-visible-right">
                                      <div className="post-visible-options-sel">
                                        <input
                                          onClick={() =>
                                            setWhoCanSeePost("whole_public")
                                          }
                                          id="user-v21"
                                          name="b-plan"
                                          type="radio"
                                          checked={
                                            whoCanSeePost === "whole_public"
                                          }
                                        />
                                        <label htmlFor="user-v21"></label>
                                      </div>
                                    </div>
                                  </li>

                                  {/* modal list for anyOne + Twitter */}

                                  <li>
                                    <div
                                      onClick={() =>
                                        setWhoCanSeePost("whole_public+Twitter")
                                      }
                                      className="post-visible-left"
                                    >
                                      <div className="mr-2">
                                        <img
                                          src="images/Globe2.png"
                                          className="img-fluid"
                                          alt="pic"
                                        />
                                      </div>
                                      <div>
                                        <h3>Anyone+Twitter</h3>
                                        <p>
                                          Anyone on or off Linkdien, post to
                                          Twitter
                                        </p>
                                      </div>
                                    </div>
                                    <div className="post-visible-right">
                                      <div className="post-visible-options-sel">
                                        <input
                                          onClick={() =>
                                            setWhoCanSeePost(
                                              "whole_public+Twitter"
                                            )
                                          }
                                          id="user-v22"
                                          name="b-plan"
                                          type="radio"
                                          checked={
                                            whoCanSeePost ===
                                            "whole_public+Twitter"
                                          }
                                        />
                                        <label htmlFor="user-v22"></label>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div
                                      onClick={() =>
                                        setWhoCanSeePost("followers_only")
                                      }
                                      className="post-visible-left"
                                    >
                                      <div className="mr-2">
                                        <img
                                          src="images/who-see.png"
                                          className="img-fluid"
                                          alt="pic"
                                        />
                                      </div>
                                      <div>
                                        <h3>Following Only</h3>
                                        <p>Followers on Enoch</p>
                                      </div>
                                    </div>
                                    <div className="post-visible-right">
                                      <div className="post-visible-options-sel">
                                        <input
                                          onClick={() =>
                                            setWhoCanSeePost("followers_only")
                                          }
                                          id="user-v23"
                                          name="b-plan"
                                          type="radio"
                                          checked={
                                            whoCanSeePost === "followers_only"
                                          }
                                        />
                                        <label htmlFor="user-v23"></label>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="post-visible-left">
                                      <div className="mr-2">
                                        <img
                                          src="images/who-coomunity.png"
                                          className="img-fluid"
                                          alt="pic"
                                        />
                                      </div>
                                      <div
                                        onClick={() =>
                                          setWhoCanSeePost("community")
                                        }
                                      >
                                        <h3
                                          id="post-select-btn"
                                          data-toggle="modal"
                                          data-target="select-community-modal"
                                        >
                                          Community <span>{">"}</span>
                                        </h3>
                                        <p>Select a Community you’re in</p>
                                      </div>
                                    </div>
                                    <div className="post-visible-right">
                                      <div className="post-visible-options-sel">
                                        <input
                                          onClick={() =>
                                            setWhoCanSeePost("community")
                                          }
                                          id="user-v24"
                                          name="b-plan"
                                          type="radio"
                                          checked={
                                            whoCanSeePost === "community"
                                          }
                                        />
                                        <label htmlFor="user-v24"></label>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                {/* <!-- <div className="post-visible-buttn-grp">
															<span className="mr-2"><a href="#" className="btn post-visible-back-btn">Back</a></span>
															<span><a href="#" id="post-save-btn" className="btn post-visible-save-btn" data-toggle="modal" data-target="select-community-modal">save</a></span>
														</div> --> */}
                              </div>
                            </div>
                          </div>
                        }
                        {/* End area on Privacy Control */}

                        <div
                          id="select-community-modal"
                          className={`${
                            whoCanSeePost === "community" &&
                            showWhoShouldViewModal
                              ? "modal fade open"
                              : "modal fade"
                          }`}
                        >
                          {/* <!-- Modal content for community --> */}
                          {
                            <div className="modal-content post-user-modal-content">
                              <span className="close">
                                <img
                                  src="images/post-close.png"
                                  alt="close"
                                  className="img-fluid"
                                  data-dismiss="modal"
                                  onClick={() =>
                                    setWhoCanSeePost("whole_public")
                                  }
                                />
                              </span>
                              <h2>Select a Community</h2>
                              <p className="mb-4">
                                Only visible to members of this community and
                                will appear on community page
                              </p>
                              <div className="post-visible-modal-list">
                                <ul>
                                  <li>
                                    <div className="post-visible-left align-items-center">
                                      <div className="mr-2">
                                        <img
                                          src="images/select-com1.png"
                                          className="img-fluid"
                                          alt="pic"
                                        />
                                      </div>
                                      <div onClick={() =>
                                          setCommunityToShareTo(
                                            "Ethereum Development"
                                          )
                                        }>
                                        <h3>Ethereum Development and DApps</h3>
                                      </div>
                                    </div>
                                    <div className="post-visible-right">
                                      <div className="post-visible-options-sel">
                                        <input
                                          onClick={() =>
                                            setCommunityToShareTo(
                                              "Ethereum Development"
                                            )
                                          }
                                          id="user-v11"
                                          name="c-plan"
                                          type="radio"
                                          checked={
                                            communityToShareTo ===
                                            "Ethereum Development"
                                          }
                                        />
                                        <label for="user-v11"></label>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="post-visible-left align-items-center">
                                      <div className="mr-2">
                                        <img
                                          src="images/select-com2.png"
                                          className="img-fluid"
                                          alt="pic"
                                        />
                                      </div>
                                      
                                      <div onClick={() =>
                                          setCommunityToShareTo(
                                            "Ethereum"
                                          )
                                        }>
                                        <h3>Ethereum</h3>
                                      </div>
                                    </div>
                                    <div className="post-visible-right">
                                      <div className="post-visible-options-sel">
                                        <input
                                          onClick={() =>
                                            setCommunityToShareTo("Ethereum")
                                          }
                                          id="user-v12"
                                          name="c-plan"
                                          type="radio"
                                          checked={
                                            communityToShareTo === "Ethereum"
                                          }
                                        />
                                        <label htmlFor="user-v12"></label>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="post-visible-left align-items-center">
                                      <div className="mr-2">
                                        <img
                                          src="images/select-com3.png"
                                          className="img-fluid"
                                          alt="pic"
                                        />
                                      </div>
                                      <div onClick={() =>
                                            setCommunityToShareTo(
                                              "Citizen Finance"
                                            )
                                          }>
                                        <h3>Citizen Finance</h3>
                                      </div>
                                    </div>
                                    <div className="post-visible-right">
                                      <div className="post-visible-options-sel">
                                        <input
                                          onClick={() =>
                                            setCommunityToShareTo(
                                              "Citizen Finance"
                                            )
                                          }
                                          id="user-v13"
                                          name="c-plan"
                                          type="radio"
                                          checked={
                                            communityToShareTo ===
                                            "Citizen_Finance"
                                          }
                                        />
                                        <label htmlFor="user-v13"></label>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="post-visible-left align-items-center">
                                      <div className="mr-2">
                                        <img
                                          src="images/select-com4.png"
                                          className="img-fluid"
                                          alt="pic"
                                        />
                                      </div>
                                      <div onClick={() =>
                                            setCommunityToShareTo("Spooky Swap")
                                          }>
                                        <h3>Spooky Swap</h3>
                                      </div>
                                    </div>
                                    <div className="post-visible-right">
                                      <div className="post-visible-options-sel">
                                        <input
                                          onClick={() =>
                                            setCommunityToShareTo("Spooky_Swap")
                                          }
                                          id="user-v14"
                                          name="c-plan"
                                          type="radio"
                                          checked={
                                            communityToShareTo === "Spooky_Swap"
                                          }
                                        />
                                        <label htmlFor="user-v14"></label>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                <div className="post-visible-buttn-grp">
                                  <span className="mr-2">
                                    <a
                                      href="#"
                                      className="btn post-visible-back-btn"
                                      onClick={() =>
                                        setWhoCanSeePost("whole_public")
                                      }
                                    >
                                      Back
                                    </a>
                                  </span>
                                  <span>
                                    <a
                                      href="#"
                                      id="post-save-btn"
                                      className="btn post-visible-save-btn"
                                      data-toggle="modal"
                                      data-target="select-community-modal"
                                      onClick={() =>
                                        setShowWhoShouldViewModal(false)
                                      }
                                    >
                                      save
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              <div className="posting-steps-content-body create-post-ckeditor-wrapper">
                {/* poll post start*/}
                {operation === "poll-post" && !pollDone && (
                  <div className="posting-steps-poll">
                    <form>
                      <div className="steps-poll-input-grp">
                        <div className="poll-input-label">Your question</div>
                        <div className="poll-input-field">
                          <input
                            type="text"
                            name="pollQuestion"
                            placeholder="E.g., How do you commute to work?"
                            onChange={handlePollValueChange}
                          />
                        </div>
                      </div>
                      <div className="steps-poll-input-grp">
                        <div className="poll-input-label">Option 1*</div>
                        <div className="poll-input-field">
                          <input
                            type="text"
                            placeholder="E.g., Public trasportation"
                            name="OptionA"
                            onChange={handlePollValueChange}
                          />
                        </div>
                      </div>
                      <div className="steps-poll-input-grp">
                        <div className="poll-input-label">Option 2*</div>
                        <div className="poll-input-field">
                          <input type="text" placeholder="E.g., Drive myself" name="OptionB" onChange={handlePollValueChange}/>
                        </div>
                      </div>
                      {newOption && <div className="steps-poll-input-grp">
                        <div className="poll-input-label">Option 3*</div>
                        <div className="poll-input-field">
                          <input type="text" placeholder="E.g., Drive myself" name="OptionC" onChange={handlePollValueChange}/>
                        </div>
                      </div>}
                      {newOption2 && <div className="steps-poll-input-grp">
                        <div className="poll-input-label">Option 4*</div>
                        <div className="poll-input-field">
                          <input type="text" placeholder="E.g., Drive myself" name="OptionD" onChange={handlePollValueChange}/>
                        </div>
                      </div>}
                      
                      {!newOption && 
                      <div className="step-poll-addOption">
                        <a href="#" className="btn poll-addOption-btn" onClick={handleOptionClick}>
                          + Add Options
                        </a>
                      </div>
                      }
                      {newOption && !newOption2 &&
                      <div className="step-poll-addOption">
                        <a href="#" className="btn poll-addOption-btn" onClick={handleOptionClick2}>
                          + Add Options
                        </a>
                      </div>
                      }
                      
                      <div className="steps-poll-input-grp">
                        <div className="poll-input-label">Poll duration</div>
                        <div className="poll-input-field">
                          <input type="text" placeholder="1 Week" name="voteDurationTimeLeft" onChange={handlePollValueChange}/>
                        </div>
                      </div>
                      <p className="poll-bottm-txt">
                        We don’t allow requests for political opinions, medical
                        information or other sensitive data.
                      </p>
                    </form>
                  </div>
                )}
               

                {/* poll post end */}
                {operation === "article-post" && (
                  <>
                    {editorLoaded ? (
                      <CKEditor
                        onChange={(event: any, editor: any) => {
                          const data = editor.getData();
                          setPostText(data);
                        }}
                        
                        config={{
                          placeholder: "What do you want to talk about ?",
                        }}
                        editor={Editor}
                        data={postText}
                        onReady={(editor: any) => {
                          // You can store the "editor" and use when it is needed.
                          // console.log("Editor is ready to use!", editor);
                          editor.editing.view.change((writer: any) => {
                            writer.setStyle(
                              "height",
                              "150px",
                              editor.editing.view.document.getRoot()
                            );
                          });
                        }}
                      />
                    ) : (
                      "Loading Editor..."
                    )}
                  </>
                )}

                {
                  pollDone && operation === "article-post" && <PollFinal data={pollInputs}/>
                }
                {documentDone === true && operation === "article-post" && selectedDocument != "" &&  (
                            <DocumentFinal cancelClickDoc={cancelClickDoc} data = {selectedDocument}/>
                 )}

                {operation === "photo-post" && (
                  <>
                    {editorLoaded ? (
                      <div className="">
                        {operation != "photo-post" && (
                          <CKEditor
                            onBlur={(event: any, editor: any) => {
                              const data = editor.getData();
                              setPostText(data);
                            }}
                            config={{
                              placeholder: "Write something about your photo",
                            }}
                            editor={Editor}
                            data={postText}
                            onReady={(editor: any) => {
                              // You can store the "editor" and use when it is needed.
                              // console.log("Editor is ready to use!", editor);
                              editor.editing.view.change((writer: any) => {
                                writer.setStyle(
                                  "height",
                                  "60px",
                                  editor.editing.view.document.getRoot()
                                );
                              });
                            }}
                          />
                        )}
                      </div>
                    ) : (
                      "Loading Editor..."
                    )}
                    <div className="posting-steps-photo mt-5">
                      {/* image posting box for caption */}
                      {selectedImage ? (
                        <div
                          className="home-img-upload-sect-body"
                          style={{ width: "100%" }}
                        >
                          <form>
                            <div className="input-title">
                              <input type="text" placeholder="Title" name="ImageTitle" onChange={handleChangeImage}/>
                            </div>
                            <div className="input-message">
                              <textarea placeholder="Write a message" name="ImageMessage" onChange={handleChangeImage}></textarea>
                            </div>
                            <div className="upload-img">
                              <ul>
                                <li>
                                  <span>
                                    <img
                                      src={URL.createObjectURL(selectedImage)}
                                      alt="img"
                                      className="img-fluid"
                                    />
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="upload-img-post-to-sect"
                              onClick={() => !dropDownProfileSharing?setDropDownProfileSharing(true):setDropDownProfileSharing(false)}
                            >
                              <h4>Posts to</h4>
                              <div className="upload-img-post-to-dropdown-box">
                                <h5
                                  onClick={() => setProfileHit("Your profile")}
                                >
                                  {profileHit}
                                </h5>
                                {
                                  profileHit === "Your profile" && (
                                    <div
                                      className="upload-img-post-to-dropdown-box-list"
                                      
                                    >
                                      <ul>
                                        <li
                                          onClick={() =>
                                            setProfileHit("DeFi Signal")
                                          }
                                        >
                                          <span>
                                            <img
                                              src="images/post-to-profile-dp.png"
                                              alt="img"
                                              className="img-fluid"
                                            />
                                          </span>
                                          <h6>DeFi Signal </h6>
                                        </li>
                                        <li
                                          className="no-border"
                                          onClick={() => setProfileHit("88mph")}
                                        >
                                          <span>
                                            <img
                                              src="images/post-to-profile-dp-2.png"
                                              alt="img"
                                              className="img-fluid"
                                            />
                                          </span>
                                          <h6>88mph</h6>
                                        </li>
                                      </ul>
                                    </div>
                                  )}
                                  {dropDownProfileSharing && <p>There are no company or Community yet</p>}
                              </div>
                            </div>
                          </form>
                        </div>
                      ) : (
                        //  <form style={{width:"100%"}}>
                        //  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/> <br/>
                        //  <div className="form-group">

                        // <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write a message"></textarea>
                        // </div>
                        //    <div style={{width:"100%", border:"1px solid lightgray"}}>
                        //    <div className="row" style={{padding:"5px"}}>
                        //      <div className="col-md-3" style={{border:'1px solid lightgray'}}>
                        //      <img

                        //      width="150"
                        //      //@ts-ignore
                        //      src={URL.createObjectURL(selectedImage)}
                        //      alt="Thumb"
                        //    />

                        //      </div>
                        //      <div className="col-md-3 ">

                        //      </div>
                        //    </div>
                        //    </div>
                        //  </form>
                        <p>
                          Drag & drop images or
                          <span>
                            <a href="#" className="btn posting-step-upload-btn">
                              <input onChange={imageChange} type="file" />
                              Upload
                            </a>
                          </span>
                        </p>
                      )}
                    </div>
                  </>
                )}

                {/* video operation inpute boxes */}
                {operation === "video-post" && (
                  <>
                    {editorLoaded ? (
                      <div className="home-img-upload-sect-body">
                        {selectedVideo != "" && (
                          <form>
                            <div className="input-title">
                              <input type="text" placeholder="Title" name="VideoTitle" onChange={handleVideoOnChange}/>
                            </div>
                            <div className="input-message">
                              <textarea name="VideoMessage" onChange={handleVideoOnChange}>Write a message</textarea>
                            </div>
                            <div className="upload-img">
                              <ul>
                                {selectedImage != "" && (
                                  <li>
                                    <span>
                                      <img
                                        src={URL.createObjectURL(selectedImage)}
                                        alt="img"
                                        className="img-fluid"
                                      />
                                    </span>
                                  </li>
                                )}
                                <li>
                                  <span>
                                  <video
                                      src={URL.createObjectURL(selectedVideo)}
                                      className="img-fluid"
                                      type="video/mp4"
                                    ></video>
                                  </span>
                                  <div className="upload-video-play-btn">
                                    <img
                                      src="images/play-button-o.svg"
                                      alt="icon"
                                      className="img-fluid"
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="upload-img-post-to-sect"
                              onClick={() => !dropDownProfileSharing?setDropDownProfileSharing(true): setDropDownProfileSharing(false) }
                            >
                              <h4>Posts to</h4>
                              <div className="upload-img-post-to-dropdown-box">
                                <h5
                                  onClick={() => setProfileHit("Your profile")}
                                >
                                  {profileHit}
                                </h5>
                                {
                                  profileHit === "Your profile" && (
                                    <div
                                      className="upload-img-post-to-dropdown-box-list"
                                      
                                    >
                                      <ul>
                                        <li
                                          onClick={() =>
                                            setProfileHit("DeFi Signal")
                                          }
                                        >
                                          <span>
                                            <img
                                              src="images/post-to-profile-dp.png"
                                              alt="img"
                                              className="img-fluid"
                                            />
                                          </span>
                                          <h6>DeFi Signal </h6>
                                        </li>
                                        <li
                                          className="no-border"
                                          onClick={() => setProfileHit("88mph")}
                                        >
                                          <span>
                                            <img
                                              src="images/post-to-profile-dp-2.png"
                                              alt="img"
                                              className="img-fluid"
                                            />
                                          </span>
                                          <h6>88mph</h6>
                                        </li>
                                      </ul>
                                    </div>
                                  )}
                                  { dropDownProfileSharing &&
                                    <p>There are no company or community yet</p>
                                  }
                              </div>
                            </div>
                          </form>
                        )}

                        {selectedVideo === "" && (
                          <div className="posting-steps-video">
                            <p>
                              <span>
                                <a
                                  href="#"
                                  className="video-posting-step-upload-btn"
                                >
                                  <input
                                    onChange={videoChange}
                                    type="file"
                                    id="videoSharing"
                                    style={{ display: "none" }}
                                  />
                                  <label
                                    htmlFor="videoSharing"
                                    style={{
                                      textDecoration: "Underline",
                                      cursor: "pointer",
                                    }}
                                  >
                                    select a video to share
                                  </label>
                                </a>
                              </span>
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      "Loading Editor..."
                    )}
                  </>
                )}
                {/* celebrationPost start */}
                      {operation === "celeb-post" && <Celebrationstep1/>}
                {/* celebrationPost end */}

                {/* document posting area */}

                {operation === "document-post" && (
                  <>
                    {selectedDocument != "" ? (
                      <div className="">
                        <div className="home-img-upload-sect-body">
                          {documentDone === true && (
                            <form>
                              <div className="input-title">
                                <input
                                  onBlur={handleDocumentDesChange}
                                  type="text"
                                  placeholder="Add a descriptive title to your document"
                                  name="DescriptedDocument"
                                />
                              </div>
                              <div className="upload-pdf-box">
                                <div className="upload-pdf uploading">
                                  {progressIncrease !== "w-100" && (
                                    <img
                                      src="images/pdf-img.svg"
                                      alt="img"
                                      className="img-fluid"
                                    />
                                  )}
                                  
                                </div>
                                {progressIncrease === "w-100" && (
                                   <img
              src="images/uploaded-pdf-img.svg"
              alt="img"
              className="img-fluid"
            />
                                  )}
                                {progressIncrease === "w-100" && <div className="upload-pdf-name" style={{display:'block'}}>
                                  <h4>{selectedDocument.name}</h4>
                                  <h5>{selectedDocument.size}kb</h5>
                                </div>}
                                
                                  <div
                                    className={`upload-pdf-progress-bar ${progressIncrease}`}
                                  ></div>
                               
                              </div>
                              <p>
                                For accessibility purposes, Enoch members who
                                can view your post will be able to download your
                                document as a PDF. <a href="#">Learn more</a>
                              </p>
                            </form>
                          )}
                          
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    
                    <div className="posting-steps-photo mt-5">
                      {/* document post button and drive area */}

                      {selectedDocument === "" && (
                        <div className="posting-steps-document">
                          <div className="step-doc-upld-btn">
                            <a href="#" className="btn posting-step-upload-btn">
                              <input
                                type="file"
                                onChange={handleDocumentFileChange}
                              />
                              Upload
                            </a>
                          </div>
                          <p className="step-doc-para1">
                            Or upload from the cloud:
                          </p>
                          <div className="document-btn-grp">
                            <span>
                              <a href="#" className="btn step-savedrive-btn">
                                <img
                                  src="images/dropbox.png"
                                  className="img-fluid mr-2"
                                />
                                Dropbox
                              </a>
                            </span>
                            <span>
                              <a href="#" className="btn step-savedrive-btn">
                                <img
                                  src="images/gdrive.png"
                                  className="img-fluid mr-2"
                                />
                                Google Drive
                              </a>
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {selectedImage === "" && selectedVideo === "" && operation != "poll-post" && documentDone && operation != "celeb-post" &&  <p className="addhash-txt">Add hashtag</p>}

                <div className="posting-steps-bottm-sect">
                  {dropDownProfileSharing === false && (
                    <div className="posting-steps-bottm-links">
                      {selectedImage === "" && selectedVideo === "" && operation != "poll-post" && documentDone &&  <ul>
                        <li
                          className="posingtablinks photo-title"
                          onClick={() => setOperation("photo-post")}
                        >
                          {operation != "photo-post" && (
                            <a>
                              <img
                                src="images/post-icon1.png"
                                className="img-fluid posting-link-img"
                                alt="images"
                              />
                              <img
                                src="images/post-icon1-hov.png"
                                className="img-fluid posting-link-img-hov"
                                alt="images"
                              />
                              <span className="posting-hovr">Photo</span>
                            </a>
                          )}

                          {operation === "photo-post" && (
                            <a>
                              <img
                                src="images/post-icon1-hov.png"
                                className="img-fluid"
                                alt="images"
                              />
                              <span className="posting-hovr">Photo</span>
                            </a>
                          )}
                        </li>
                        <li
                          className="posingtablinks video-title"
                          onClick={() => setOperation("video-post")}
                        >
                          {operation != "video-post" && (
                            <a href="javascript:void(0)">
                              <img
                                src="images/post-icon2.png"
                                className="img-fluid posting-link-img"
                                alt="images"
                              />
                              <img
                                src="images/post-icon2-hov.png"
                                className="img-fluid posting-link-img-hov"
                                alt="images"
                              />
                              <span className="posting-hovr">Video</span>
                            </a>
                          )}
                          {/* video edit post  */}
                          {operation === "video-post" && (
                            <a href="javascript:void(0)">
                              <img
                                src="images/post-icon2-hov.png"
                                className="img-fluid "
                                alt="images"
                              />
                              <span className="posting-hovr">Video</span>
                            </a>
                          )}
                        </li>
                        <li
                          className="posingtablinks doc-title"
                          onClick={() => setOperation("document-post")}
                        >
                          {operation != "document-post" && (
                            <a href="javascript:void(0)">
                              <img
                                src="images/post-icon3.png"
                                className="img-fluid posting-link-img"
                                alt="images"
                              />
                              <img
                                src="images/post-icon3-hov.png"
                                className="img-fluid posting-link-img-hov"
                                alt="images"
                              />
                              <span className="posting-hovr custm-left">
                                Documents
                              </span>
                            </a>
                          )}
                          {operation === "document-post" && (
                            <a href="javascript:void(0)">
                              <img
                                src="images/post-icon3-hov.png"
                                className="img-fluid"
                                alt="images"
                              />
                              <span className="posting-hovr custm-left">
                                Documents
                              </span>
                            </a>
                          )}
                        </li>
                        <li
                          className="posingtablinks poll-title"
                          onClick={() => setOperation("poll-post")}
                        >
                          {operation != "poll-post" && (
                            <a href="javascript:void(0)">
                              <img
                                src="images/post-icon4.png"
                                className="img-fluid posting-link-img"
                                alt="images"
                              />
                              <img
                                src="images/post-icon4-hov.png"
                                className="img-fluid posting-link-img-hov"
                                alt="images"
                              />
                              <span className="posting-hovr">Poll</span>
                            </a>
                          )}
                          {operation === "poll-post" && (
                            <a href="javascript:void(0)">
                              <img
                                src="images/post-icon4-hov.png"
                                className="img-fluid"
                                alt="images"
                              />
                              <span className="posting-hovr">Poll</span>
                            </a>
                          )}
                        </li>
                        <li
                          className="posingtablinks celeb-title"
                          onClick={() => setOperation("celeb-post")}
                        >
                          {operation !== "celeb-post" && <a href="javascript:void(0)">
                            <img
                              src="images/post-icon5.png"
                              className="img-fluid posting-link-img"
                              alt="images"
                            />
                            <img
                              src="images/post-icon5-hov.png"
                              className="img-fluid posting-link-img-hov"
                              alt="images"
                            />
                            <span className="posting-hovr custm-left2">
                              Celebrate
                            </span>
                          </a>}
                          {operation === "celeb-post" && <a href="javascript:void(0)">
                            
                            <img
                              src="images/post-icon5-hov.png"
                              className="img-fluid"
                              alt="images"
                            />
                            <span className="posting-hovr custm-left2">
                              Celebrate
                            </span>
                          </a>}
                        </li>
                        <li className="posingtablinks help-title">
                          <a href="javascript:void(0)">
                            <img
                              src="images/post-icon6.png"
                              className="img-fluid"
                              alt="images"
                            />
                            <span className="posting-hovr">Help</span>
                          </a>
                        </li>
                      </ul>}
                    </div>
                  )}

                  {/* operation for button */}
                  {selectedImage === "" && selectedVideo === "" && operation != "poll-post" && selectedDocument === ""  &&
                  <div className="posting-steps-btn-links">
                    <span className="mr-2">
                     {operation === "article-post" && <a
                        onClick={() => router.back()}
                        className="btn posting-steps-back-btn"
                      >
                        Back
                      </a>}
                      {operation != "article-post" && <a
                        onClick={() => setOperation("article-post")}
                        className="btn posting-steps-back-btn"
                      >
                        Back
                      </a>}
                    </span>
                    <span>
                      {postText === "" && <a
                        id="post-save-btn"
                        className="btn posting-steps-done-btn"
                      >
                        {sendingPost || sendingPhoto || sendingVideo || sendingPoll ? (
                          <div
                            className="spinner-border text-light"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        ) : (
                          "Done"
                        )}
                      </a>}
                      {postText != "" && <a
                        onClick={
                          operation === "article-post" && pollInputs.pollQuestion === ""
                            ? createPostArticle
                            : operation === "photo-post"
                            ? handleFileSubmit
                            : operation === "video-post"
                            ? handleVideoSubmit
                            : operation === "article-post" && pollInputs.pollQuestion != ""
                            ? createPollMutation
                            : () => {}

                        }
                        id="post-save-btn"
                        className="btn posting-steps-done-btn active"
                      >
                        {sendingPost || sendingPhoto || sendingVideo || sendingPoll ? (
                          <div
                            className="spinner-border text-light"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        ) : (
                          "Done"
                        )}
                      </a>}
                    </span>
                  </div>}
                  {trigerOnDone && operation != "article-post" && operation != "poll-post"  && selectedImage === "" && selectedVideo === "" &&
                  <div className="posting-steps-btn-links">
                    <span className="mr-2">
                     {operation === "article-post" && <a
                        onClick={() => router.back()}
                        className="btn posting-steps-back-btn"
                      >
                        Back
                      </a>}
                      {operation != "article-post" && <a
                        onClick={() => setOperation("article-post")}
                        className="btn posting-steps-back-btn"
                      >
                        Back
                      </a>}
                    </span>
                    <span>
                      {postText === "" && <a
                        id="post-save-btn"
                        className="btn posting-steps-done-btn"
                      >
                        {sendingPost || sendingPhoto || sendingVideo || sendingPoll ? (
                          <div
                            className="spinner-border text-light"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        ) : (
                          "Done"
                        )}
                      </a>}
                      {postText != "" && <a
                        onClick={
                          operation === "article-post" && pollInputs.pollQuestion === ""
                            ? createPostArticle
                            : operation === "photo-post"
                            ? handleFileSubmit
                            : operation === "video-post"
                            ? handleVideoSubmit
                            : operation === "article-post" && pollInputs.pollQuestion != ""
                            ? createPollMutation
                            : () => {}

                        }
                        id="post-save-btn"
                        className={"btn posting-steps-done-btn active"}
                      >
                        {sendingPost || sendingPhoto || sendingVideo || sendingPoll ? (
                          <div
                            className="spinner-border text-light"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        ) : (
                          "Done"
                        )}
                      </a>}
                    </span>
                  </div>}
                  {/* image done button */}
                  {selectedImage !== "" &&  <div className="posting-steps-btn-links ms-auto" style={{marginLeft: "auto"}}>
                    <span className="mr-2">
                      <a
                        onClick={handleImageBackButton}
                        className="btn posting-steps-back-btn"
                      >
                        Back
                      </a>
                    </span>
                    <span>
                      <a
                        onClick={handleFileSubmit}
                        id="post-save-btn"
                        className={`${selectedImage != "" ?"btn posting-steps-done-btn active" : "btn posting-steps-done-btn"}`}
                      >{ sendingPhoto  ? (
                        <div
                          className="spinner-border text-light"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : (
                        "Done"
                      )}
                      </a>
                     
                    </span>
                  </div>}
                  {/* video slection done */}
                  {selectedVideo !== "" &&  <div className="posting-steps-btn-links" style={{marginLeft:"auto"}}>
                    <span className="mr-2">
                      <a
                        onClick={handleImageBackButton}
                        className="btn posting-steps-back-btn"
                      >
                        Back
                      </a>
                    </span>
                    <span>
                      <a
                        onClick={handleVideoSubmit}
                        id="post-save-btn"
                        className={`${selectedVideo != "" ?"btn posting-steps-done-btn active" : "btn posting-steps-done-btn"}`}
                      >{sendingVideo ? (
                        <div
                          className="spinner-border text-light"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : (
                        "Done"
                      )}
                      </a>
                     
                    </span>
                  </div>}
                  {/* document selection done */}
                  {selectedDocument !== "" && !trigerOnDone && <div className="posting-steps-btn-links">
                    <span className="mr-2">
                      <a
                        onClick={handleImageBackButton}
                        className="btn posting-steps-back-btn"
                      >
                        Back
                      </a>
                    </span>
                    <span>
                      <a
                        id="post-save-btn"
                        className={`${selectedDocument != "" ?"btn posting-steps-done-btn active" : "btn posting-steps-done-btn"}`}
                        onClick={HandleDocumentDone}
                      >{sendingDoc ? (
                        <div
                          className="spinner-border text-light"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : (
                        "Done"
                      )}
                      </a>
                     
                    </span>
                  </div>}

                  {selectedDocument !== "" && trigerOnDone && operation==="article-post" && <div className="posting-steps-btn-links">
                    <span className="mr-2">
                      <a
                        onClick={handleImageBackButton}
                        className="btn posting-steps-back-btn"
                      >
                        Back
                      </a>
                    </span>
                    <span>
                      <a
                        id="post-save-btn"
                        className={`${selectedDocument != "" ?"btn posting-steps-done-btn active" : "btn posting-steps-done-btn"}`}
                        onClick={handleDocSubmit}
                      >
                        {sendingDoc ? (
                        <div
                          className="spinner-border text-light"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : (
                        "Post"
                      )}
                      </a>
                     
                    </span>
                  </div>}

                  {/* poll done */}
                  {operation === "poll-post" &&  <div className="posting-steps-btn-links">
                    <span className="mr-2">
                      <a
                        onClick={handleImageBackButton}
                        className="btn posting-steps-back-btn"
                      >
                        Back
                      </a>
                    </span>
                    <span>
                      <a
                        id="post-save-btn"
                        className={`${operation === "poll-post" && pollInputs.OptionB  ?"btn posting-steps-done-btn active" : "btn posting-steps-done-btn"}`}
                        onClick={HandlePollDone}
                      >Done
                      </a>
                     
                    </span>
                  </div>}
                </div>
              </div>
            </div>
          </div>

          {/* spooky sawp in here */}

          <div className="posting-steps-block-right">
            {/* spokey start from here */}
            {communityToShareTo != "" && (
              <div className="posting-steps-spooky">
                <div className="posting-steps-spooky-hd">
                  <span>
                    {(communityToShareTo === "Spooky_Swap" && (
                      <img
                        src="images/spooky-swap.png"
                        className="img-fluid"
                        alt="spooky"
                      />
                    )) ||
                      (communityToShareTo === "Citizen_Finance" && (
                        <img
                          src="images/select-com3.png"
                          className="img-fluid"
                          alt="spooky"
                        />
                      )) ||
                      (communityToShareTo === "Ethereum" && (
                        <img
                          src="images/18+Community-ER-dp.png"
                          className="img-fluid"
                          alt="spooky"
                        />
                      )) ||
                      (communityToShareTo === "Ethereum_Development" && (
                        <img
                          src="images/select-com1.png"
                          className="img-fluid"
                          alt="spooky"
                        />
                      ))}
                  </span>
                  {communityToShareTo}
                </div>
                <div className="posting-steps-spooky-content">
                  {communityToShareTo} utilizes the Fantom network to deliver
                  top speed, security, and scalable transactions. Your swaps
                  will cost a fraction of a penny.
                </div>
                <div className="posting-steps-membrs-online">
                  <div className="posting-steps-membrs-online-lft">
                    <h3>Members</h3>
                    <p>3.2m</p>
                  </div>
                  <div className="posting-steps-membrs-online-right">
                    <h3>Online</h3>
                    <p>5.7k</p>
                  </div>
                </div>
                <div className="posting-steps-created">
                  <span>
                    <img
                      src="images/Birthday.png"
                      className="img-fluid"
                      alt="Birthday"
                    />
                  </span>
                  Created on 10 july 2021
                </div>
                <div className="posting-steps-tribe-dropbox dropdown">
                  <a
                    href="#"
                    id="tribe-dropbox-list-input"
                    className="posting-step-tribe-box"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Community Options
                  </a>
                  <div
                     id="tribe-dropbox-list"
                    className="dropdown-menu posting-steps-tribe-dropbox-list"
                  >
                    <ul>
                      <li>Community Options</li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            <div className="posting-steps-block-list">
              <h2>Posting on Enoch</h2>
              <ul>
                <li>1. Remember the human</li>
                <li>2. Behave like you would in real life</li>
                <li>3. Look for the original source of content</li>
                <li>4. Search for duplicates before posting</li>
                <li>5. Read the community’s rules</li>
              </ul>
            </div>
            <p>
              Please be mindful of Enoch's <a href="#">content policy</a> and
              practice good reddiquette.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withApollo(CreatePost, { getDataFromTree });

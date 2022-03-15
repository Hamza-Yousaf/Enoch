import React, { useState } from "react";
import router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import { useMutation } from '@apollo/client';
import CommunitiesHeaderJoin from './CommunitiesHeaderJoin';
import CommunitiesLeft from './CommunitiesLeft';
import WikiCommunites from './WikiCommunites';
import CommunityPost from './CommunityPost';
import CommunityGrow from './CommunityGrow';
import CommunityRightContent from './CommunityRightContent';
import FAQ from './FAQCommunity'
import { UPDATE_COMMUNITY_HEADER } from './../../graphql/mutattions/updateCommunityHeader';

const Communities = ({name, id, about, coverImage1, communityHeader1, communityDescription, communityType, updated_at, joinedUsers }) => {
	const dispatch = useDispatch();

  const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);

  const createPostState = useSelector(
    (state: State) => state.setCreatePostState
  );

    const [edit, setEdit] = useState(false)
    const [tabToggle,setTabToggle] = useState({
        Popular:true,
        Sports:false,
        GAMES:false,
        Blockchain:false,
        IT:false,
        Finance:false,
        Fashion:false
    });
    const [coverImage, setCoverImage] = useState("/images/community-img1.png")
    
	const upDateHeaderMutation = useMutation(UPDATE_COMMUNITY_HEADER)
	const upDateHeaderData = upDateHeaderMutation[0];
	const upDateHeaderDataSending = upDateHeaderMutation[1].loading;

	console.log({updated_at})

    const handleEdit = () => {
      if(!edit){
        setEdit(true)  
      }
      else if(edit){
		upDateHeaderData({
			variables:{
				communityId: id,
				coverImage:coverImage,
				communityHeader:name,
			}
		})
		.then(res => {
			console.log(res)
		})
        setEdit(false) 
      }   
    }
    const handlePopularToggle = () => {
        const newToggle = {...tabToggle}
        newToggle.Popular = true;
        newToggle.Sports = false;
        newToggle.GAMES = false;
        newToggle.Blockchain = false;
        newToggle.IT = false;
        newToggle.Fashion = false;
        newToggle.Finance = false;
        setTabToggle(newToggle  )
    }
    const handleSportsToggle = () => {
        const newToggle = {...tabToggle}
        newToggle.Popular = false;
        newToggle.Sports = true;
        newToggle.GAMES = false;
        newToggle.Blockchain = false;
        newToggle.IT = false;
        newToggle.Fashion = false;
        newToggle.Finance = false;
        setTabToggle(newToggle)
    }
    const handleGAMESToggle = () => {
        const newToggle = {...tabToggle}
        newToggle.Popular = false;
        newToggle.Sports = false;
        newToggle.GAMES = true;
        newToggle.Blockchain = false;
        newToggle.IT = false;
        newToggle.Fashion = false;
        newToggle.Finance = false;
        setTabToggle(newToggle)
    }
    const handleBlockchainToggle = () => {
        const newToggle = {...tabToggle}
        newToggle.Popular = false;
        newToggle.Sports = false;
        newToggle.GAMES = false;
        newToggle.Blockchain = true;
        newToggle.IT = false;
        newToggle.Fashion = false;
        newToggle.Finance = false;
        setTabToggle(newToggle)
    }
    const handleITToggle = () => {
        const newToggle = {...tabToggle}
        newToggle.Popular = false;
        newToggle.Sports = false;
        newToggle.GAMES = false;
        newToggle.Blockchain = false;
        newToggle.IT = true;
        newToggle.Fashion = false;
        newToggle.Finance = false;
        setTabToggle(newToggle)
    }
    const handleFinanceToggle = () => {
        const newToggle = {...tabToggle}
        newToggle.Popular = false;
        newToggle.Sports = false;
        newToggle.GAMES = false;
        newToggle.Blockchain = false;
        newToggle.IT = false;
        newToggle.Fashion = false;
        newToggle.Finance = true;
        setTabToggle(newToggle)
    }
    const handleFashionToggle = () => {
        const newToggle = {...tabToggle}
        newToggle.Popular = false;
        newToggle.Sports = false;
        newToggle.GAMES = false;
        newToggle.Blockchain = false;
        newToggle.IT = false;
        newToggle.Fashion = true;
        newToggle.Finance = false;
        setTabToggle(newToggle)
    }
	

    const [addDescription, setAddDescription] = useState({
        descriptionEvent:false,
        description:""
    })
    const handleDescription = () => {
        
        setAddDescription({...addDescription, descriptionEvent:true})
    }
    const handleDescriptionChange = (e:any) => {
        const newDescription = {...addDescription}
        newDescription.description = addDescription.description + e.target.value
        setAddDescription(newDescription)
    }
    const handleOnSaveDescription = (e:any) => {
        setAddDescription({...addDescription, descriptionEvent:false})
    }
    const handleOnCancelDescription = (e:any) => {
        setAddDescription({...addDescription, descriptionEvent:false})
        setAddDescription({...addDescription, description:""})
    }
    const [editLogo, setEditLogo] = useState(false)
    const handleEditLogo = () => {
        setEditLogo(true)
    }
    
    return (
        <div  style={{backgroundColor:'#F7F8FD'}}>
            <div className="row">	
		<div className="ezl-dashboard-container">			
			<div className="enoch-community-header-banner mb-4">			
				<img src={coverImage} className="img-fluid your-event-cover-img" alt="banner"/>
				<span className={`${edit? "enoch-community-BGedit-btn deefi-BGedit-active" : "enoch-community-BGedit-btn"  }`} data-toggle="modal" data-target="#community-head-bg"><img src="/images/communityEdit.png" className="img-fluid" alt="edit"/></span>
				
				<div id="community-head-bg" className="modal community-headbg-modal" role="dialog">
					<div className="modal-dialog">
				  
					  {/* <!-- Modal content--> */}
					  <div className="modal-content community-hd-content">
						<div className="community-header">
						  <h3 className="modal-title">Background Photo</h3>
						</div>
						<div className="community-hd-modal-body">
						  <div className="community-modal-imgBlock">
							  	<img src={coverImage} className="img-fluid community-coverimg" alt="community"/>
								  <div className="community-modal-innerimgBlock">
									  <h3>{name}</h3>
								  </div>
						 </div> 
						 <div className="community-modal-imgGal">
							 <h4>Select the background banner</h4>
							 <div className="community-modal-tab">
								<ul className="imgGalTab">
									<li><button className={`${tabToggle.Popular ?"  imgGallinks active" : "imgGallinks "}`} onClick={handlePopularToggle}>Popular</button></li>
									<li><button  className={`${tabToggle.Sports ? "  imgGallinks active" : "imgGallinks "}`} onClick={handleSportsToggle}>Sports  </button></li>
									<li><button className={`${tabToggle.GAMES ? "  imgGallinks active" : "imgGallinks "}`} onClick={handleGAMESToggle}>GAMES </button></li>
									<li><button className={`${tabToggle.Blockchain ? "imgGallinks active" : "imgGallinks "}`} onClick={handleBlockchainToggle}>Blockchain</button></li>
									<li><button className={`${tabToggle.IT ? "imgGallinks active" : "imgGallinks "}`} onClick={handleITToggle}>IT </button></li>
									<li><button className={`${tabToggle.Finance ? "imgGallinks active" : "imgGallinks "}`} onClick={handleFinanceToggle}>Finance </button></li>
									<li><button className={`${tabToggle.Fashion ? "imgGallinks active" : "imgGallinks "}`} onClick={handleFashionToggle}>Fashion </button></li>
									
								</ul>
							 </div>
							 <div className="imgGalTab-content-block">
								 <div id="popular" className="imgGaltabcontent imgGaltabcontent-d-block">
									<ul>
										<li className={`${coverImage === "/images/community-bg-img2.png"?"community-imgGal-active imageSelected":"community-imgGal-active"}`} onClick={() => setCoverImage('images/community-bg-img2.png')}>
											<img src="/images/community-bg-img2.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className={`${coverImage === "/images/community-bg-img3.png"?"community-imgGal-active imageSelected":"community-imgGal-active"}`} onClick={() => setCoverImage("/images/community-bg-img3.png")}>
											<img src="/images/community-bg-img3.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className={`${coverImage === "/images/community-bg-img4.png"?"community-imgGal-active imageSelected":"community-imgGal-active"}`} onClick={() => setCoverImage("/images/community-bg-img4.png")}>
											<img src="/images/community-bg-img4.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className={`${coverImage === "/images/event-bg-img2.png"?"community-imgGal-active imageSelected":"community-imgGal-active"}`} onClick={() => setCoverImage("/images/event-bg-img2.png")}>
											<img src="/images/event-bg-img2.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className={`${coverImage === "/images/community-bg-img6.png"?"community-imgGal-active imageSelected":"community-imgGal-active"}`} onClick={() => setCoverImage("/images/community-bg-img6.png")}>
											<img src="/images/community-bg-img6.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className={`${coverImage === "/images/community-bg-img7.png"?"community-imgGal-active imageSelected":"community-imgGal-active"}`} onClick={() => setCoverImage("/images/community-bg-img7.png")}>
											<img src="/images/community-bg-img7.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className={`${coverImage === "/images/community-bg-img8.png"?"community-imgGal-active imageSelected":"community-imgGal-active"}`} onClick={() => setCoverImage("/images/community-bg-img8.png")}>
											<img src="/images/community-bg-img8.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className={`${coverImage === "/images/community-bg-img9.png"?"community-imgGal-active imageSelected":"community-imgGal-active"}`} onClick={() => setCoverImage("/images/community-bg-img9.png")}>
											<img src="/images/community-bg-img9.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className={`${coverImage === "/images/community-bg-img10.png"?"community-imgGal-active imageSelected":"community-imgGal-active"}`} onClick={() => setCoverImage("/images/community-bg-img10.png")}>
											<img src="/images/community-bg-img10.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className={`${coverImage === "/images/community-bg-img11.png"?"community-imgGal-active imageSelected":"community-imgGal-active"}`} onClick={() => setCoverImage("/images/community-bg-img11.png")}>
											<img src="/images/community-bg-img11.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
									</ul>
								 </div>
								 <div id="Sports" className="imgGaltabcontent">
									<ul>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img2.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img3.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img4.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active imageSelected">
											<img src="/images/community-bg-img5.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img6.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img7.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img8.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img9.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img10.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img11.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
									</ul>
								 </div>
								 <div id="games" className="imgGaltabcontent">
									<ul>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img2.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img3.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img4.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active imageSelected">
											<img src="/images/community-bg-img5.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img6.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img7.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img8.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img9.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img10.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img11.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
									</ul>
								 </div>
								 <div id="Blockchain" className="imgGaltabcontent">
									<ul>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img2.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img3.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img4.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active imageSelected">
											<img src="/images/community-bg-img5.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img6.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img7.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img8.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img9.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img10.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img11.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
									</ul>
								 </div>
								 <div id="It" className="imgGaltabcontent">
									<ul>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img2.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img3.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img4.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active imageSelected">
											<img src="/images/community-bg-img5.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img6.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img7.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img8.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img9.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img10.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img11.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
									</ul>
								 </div>
								 <div id="Finance" className="imgGaltabcontent">
									<ul>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img2.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img3.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img4.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active imageSelected">
											<img src="/images/community-bg-img5.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img6.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img7.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img8.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img9.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img10.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img11.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
									</ul>
								 </div>
								 <div id="Fashion" className="imgGaltabcontent">
									<ul>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img2.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img3.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img4.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active imageSelected">
											<img src="/images/community-bg-img5.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img6.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img7.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img8.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img9.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img10.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
										<li className="community-imgGal-active">
											<img src="/images/community-bg-img11.png" className="img-fluid" alt="community"/>
											<div className="community-imgGal-selected"><img src="/images/imageCheck.png" className="img-fluid" alt="community"/></div>
										</li>
									</ul>
								 </div>
							</div>
						 </div>
						 <div className="community-bottom-bttngrp">
							<div className="community-bottom-bttnlft">
								Delete Photo
							</div>
							<div className="community-bottom-bttnright">
								<button className="community-bttnright-cancel" data-dismiss='modal'>Cancel</button>
								<button className="community-bttnright-apply">Apply</button>
							</div>
						 </div>
						</div>
						
					  </div>
				  
					</div>
				  </div>
				<div className={`${edit?"enoch-community-header-content paranteditable":"enoch-community-header-content"}`}>
					<h2 contenteditable={`${edit?"true":"false"}`} className={`${edit?"editable":"disableEdit"}`}>{name}</h2>
					<p className="community-header-txt1">max. 25 words</p>
					<div className="enoch-community-edit-head">
						
						<span className="communityEdit-txt1" onClick={handleEdit}><img src="/images/communityEdit.png" className="img-fluid mr-1" alt="edit" />Edit Page</span>
						<span className="communityEdit-txt2" onClick={handleEdit}><img src="/images/savepage.png" className="img-fluid mr-1" alt="edit"/>Save Page</span>
					</div>
				</div>
				
			</div>
			<div className="enoch-community-deefi-block">
				<div className="enoch-community-deefi-block-lft">
					{createPostState.communitiesPostTriger ?(<CommunitiesHeaderJoin id={id} joinedUsers={joinedUsers}/>):(
					<div className="enoch-community-deefi-signal mb-4">
						<div className="enoch-community-deefi-signal-lft">
							<div className="community-deefi-logo mr-4">
								<span><img src="/images/community-img2.png" className="img-fluid" alt="defi"/></span>
								<div className={`${editLogo?"community-deefi-change-bg deefi-edit-bgactive":"community-deefi-change-bg"}`}>
									<h3>Change the bg color for your intials</h3>
									<div className="community-deefi-colr-block">
										<ul>
											<li className="deefi-colr1">
												<div className="community-clr-selected"><img src="/images/imageCheck2.png" className="img-fluid" alt="community"/></div>
											</li>
											<li className="deefi-colr2">
												<div className="community-clr-selected"><img src="/images/imageCheck2.png" className="img-fluid" alt="community"/></div>
											</li>
											<li className="deefi-colr3 clr-selected">
												<div className="community-clr-selected"><img src="/images/imageCheck2.png" className="img-fluid" alt="community"/></div>
											</li>
											<li className="deefi-colr4">
												<div className="community-clr-selected"><img src="/images/imageCheck2.png" className="img-fluid" alt="community"/></div>
											</li>
											<li className="deefi-colr5">
												<div className="community-clr-selected"><img src="/images/imageCheck2.png" className="img-fluid" alt="community"/></div>
											</li>
											<li className="deefi-colr6">
												<div className="community-clr-selected"><img src="/images/imageCheck2.png" className="img-fluid" alt="community"/></div>
											</li>
											<li className="deefi-colr7">
												<div className="community-clr-selected"><img src="/images/imageCheck2.png" className="img-fluid" alt="community"/></div>
											</li>
											<li className="deefi-colr8">
												<div className="community-clr-selected"><img src="/images/imageCheck2.png" className="img-fluid" alt="community"/></div>
											</li>
											<li className="deefi-colr9">
												<div className="community-clr-selected"><img src="/images/imageCheck2.png" className="img-fluid" alt="community"/></div>
											</li>
											<li className="deefi-colr10">
												<div className="community-clr-selected"><img src="/images/imageCheck2.png" className="img-fluid" alt="community"/></div>
											</li>
											<li className="deefi-colr11">
												<div className="community-clr-selected"><img src="/images/imageCheck2.png" className="img-fluid" alt="community"/></div>
											</li>
											<li className="deefi-colr12">
												<div className="community-clr-selected"><img src="/images/imageCheck2.png" className="img-fluid" alt="community"/></div>
											</li>
											<li className="deefi-colr13">
												<div className="community-clr-selected"><img src="/images/imageCheck2.png" className="img-fluid" alt="community"/></div>
											</li>
										</ul>
									</div>
									<div className="community-deefi-bttn-block">
										<button className="community-deefi-cancelbtn">Cancel</button>
										<button className="community-deefi-savelbtn" onClick={() => {setEditLogo(false)}}>Save</button>
									</div>
								</div>
							</div>
							<div>
								<h3>{name}</h3>
								<p>@{name}</p>
							</div>
							 <span className={`${edit?"enoch-community-deefi-editbtn deefi-editbtn-active":"enoch-community-deefi-editbtn"}`} onClick={handleEditLogo}><img src="/images/communityEdit.png" className="img-fluid" alt="edit"/></span>
							
						</div>
						<div className="enoch-community-deefi-signal-right">
							<ul className="community-deefi-signal-list">
								<li>
									<div className="comuni-defi-share"><img src="/images/community-share.png" className="img-fluid" alt="share"/></div>
								</li>
								<li>
									<div className="comuni-defi-share"><img src="/images/community-alert.png" className="img-fluid" alt="share"/></div>
								</li>
								<li>
									<div className="event-3dots dropdown">
										<span data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="/images/community-3dots.png" alt="3dots" className="img-fluid"/></span>
										<div className="dropdown-menu event-info-droplist">
											<ul>
												<li>Community Tools</li>
												<li>Invite Users</li>
												<li>Delete Community</li>
											</ul>
										</div>
											
									</div>
								</li>
							</ul>
						</div>
					</div>)}
					
					{createPostState.wikiClick ? (<WikiCommunites/>):(
					<div>
					<div className="enoch-community-creat-post">
						<div className="enoch-community-creat-post-lft">
							<span><img src="/images/post-user.png" className="img-fluid" alt="user"/></span><div className="home-post-input">Create Post </div>
						</div>
						<div className="enoch-community-creat-post-right">
							<ul>
											<li><input type="file" className="home-post-file-uplod"/><img src="/images/post-Image.png" className="img-fluid" alt="Photo"/></li>
											<li><input type="file" className="home-post-file-uplod"/><img src="/images/post-Video.png" className="img-fluid" alt="Video"/></li>
											<li><img src="/images/post-Event.png" className="img-fluid" alt="Event"/></li>
											<li><img src="/images/post-Article.png" className="img-fluid" alt="Write Article"/></li>
										</ul>
						</div>
					</div>
					{createPostState.communitiesPostTriger ? (<CommunityPost/>) : !createPostState.communitiesPostTriger ? (<CommunityGrow/>):(<div></div>)}
					</div>)}
					
				</div>
				{createPostState.communitiesPostTriger? (<CommunitiesLeft/>):(<CommunityRightContent updated_at={updated_at} id={id} description={communityDescription}/>)}
			</div>
			
		</div>
		{/* modal */}
		<div className="modal" id="Invite-Attendees-Modal">
			<div className="modal-dialog">
				<div className="modal-content Invite-Attendees-Modal-content">

					{/* <!-- Modal Header --> */}
					<div className="Invite-Attendees-Modal-header">
						<h1>Invite Followers</h1>
						<button type="button" className="close" data-dismiss="modal"><img src="/images/shere-event-modal-Close.png" alt="X" className="img-fluid"/></button>
					</div>

					{/* <!-- Modal body --> */}
					<div className="Invite-Attendees-Modal-body">
						<div className="Invite-Attendees-Modal-searchBar">
							<button><img src="/images/invite-modal-Search.png" alt="icon" className="img-fluid"/></button>
							<input type="text" value="Amelia"/>
						</div>
						<div className="Invite-Attendees-list-sect">
							<div className="Invite-Attendees-list-right">
								<div className="Invite-Attendees-list-people no-border">
									<div className="Invite-Attendees-people-checkBox">
										<input type="checkbox"/>
									</div>
									<div className="Invite-Attendees-people-profilePic">
										<img src="/images/event-invite-people1.png" alt="UserDP" className="img-fluid"/>
									</div>
									<div className="Invite-Attendees-people-Text">
										<h1>Amelia Margaret</h1>
										<p>UX Director &amp; Designer • Producer, Bollywood • Ex Design Head AthenaHealth, Apple Mobility Partners, Althea Americas</p>
									</div>
								</div>
								
								<div className="Invite-Attendees-list-people">
									<div className="Invite-Attendees-people-checkBox">
										<input type="checkbox"/>
									</div>
									<div className="Invite-Attendees-people-profilePic">
										<img src="/images/event-invite-people2.png" alt="UserDP" className="img-fluid"/>
									</div>
									<div className="Invite-Attendees-people-Text">
										<h1>Harry Callum</h1>
										<p>UX Director &amp; Designer • Producer, Bollywood • Ex Design Head AthenaHealth, Apple Mobility Partners, Althea Americas</p>
									</div>
								</div>
								
								<div className="Invite-Attendees-list-people">
									<div className="Invite-Attendees-people-checkBox">
										<input type="checkbox"/>
									</div>
									<div className="Invite-Attendees-people-profilePic">
										<img src="/images/event-invite-people3.png" alt="UserDP" className="img-fluid"/>
									</div>
									<div className="Invite-Attendees-people-Text">
										<h1>Thomas Joe </h1>
										<p>UX Director &amp; Designer • Producer, Bollywood • Ex Design Head AthenaHealth, Apple Mobility Partners, Althea Americas</p>
									</div>
								</div>
								
								<div className="Invite-Attendees-list-people">
									<div className="Invite-Attendees-people-checkBox">
										<input type="checkbox"/>
									</div>
									<div className="Invite-Attendees-people-profilePic">
										<img src="/images/event-invite-people4.png" alt="UserDP" className="img-fluid"/>
									</div>
									<div className="Invite-Attendees-people-Text">
										<h1>James Charlie</h1>
										<p>UX Director &amp; Designer • Producer, Bollywood • Ex Design Head AthenaHealth, Apple Mobility Partners, Althea Americas</p>
									</div>
								</div>
								
								<div className="Invite-Attendees-list-people">
									<div className="Invite-Attendees-people-checkBox">
										<input type="checkbox"/>
									</div>
									<div className="Invite-Attendees-people-profilePic">
										<img src="/images/event-invite-people5.png" alt="UserDP" className="img-fluid"/>
									</div>
									<div className="Invite-Attendees-people-Text">
										<h1>William Damian</h1>
										<p>UX Director &amp; Designer • Producer, Bollywood • Ex Design Head AthenaHealth, Apple Mobility Partners, Althea Americas</p>
									</div>
								</div>
								
								<div className="Invite-Attendees-list-people">
									<div className="Invite-Attendees-people-checkBox">
										<input type="checkbox"/>
									</div>
									<div className="Invite-Attendees-people-profilePic">
										<img src="/images/event-invite-people5.png" alt="UserDP" className="img-fluid"/>
									</div>
									<div className="Invite-Attendees-people-Text">
										<h1>William Damian</h1>
										<p>UX Director &amp; Designer • Producer, Bollywood • Ex Design Head AthenaHealth, Apple Mobility Partners, Althea Americas</p>
									</div>
								</div>
								
								
							</div>
							<div className="Invite-Attendees-list-left">
								<div className="Invite-Attendees-left-header">
									<h1>1 Selected</h1>
									<h2>Remove All</h2>
								</div>
								<ul>
									<li>
										<div className="Invite-Attendees-seleceted-list">
											<div className="Invite-Attendees-seleceted-person-img">
												<img src="/images/KieraThomson.png" alt="UserDP" className="img-fluid"/>
											</div>
											<div className="Invite-Attendees-seleceted-person-name">
												<h3>Amelia Margaret</h3>
											</div>
											<div className="Invite-Attendees-seleceted-person-close">
												<img src="/images/selecetd-closeCross.png" alt="X" className="img-fluid"/>
											</div>
										</div>
									</li>
								</ul>

							</div>
						</div>
						<div className="Invite-Attendees-btn">
							<button><a href="#!">Invite 1</a></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	
	</div>
        </div>
    );
};

export default Communities;
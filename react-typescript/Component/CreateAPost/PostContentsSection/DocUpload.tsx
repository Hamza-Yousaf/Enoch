import React from 'react';
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../state";
import { useDispatch, useSelector } from "react-redux";
const DocUpload = () => {
    const dispatch = useDispatch();
    const { setCreatePostState } = bindActionCreators(actionCreators, dispatch);
    const createPostState = useSelector(
      (state: State) => state.setCreatePostState
    );
    const handleCancelDocUpload = (e:any) => {
        const newDoc = {...createPostState}
        newDoc.document = "";
        setCreatePostState(newDoc)
    }
    return (
        <div className="pdf-uploaded-box">
            <div className="pdf-uploaded-img">
            <img src={`${createPostState.document?.sizeBytes ? createPostState.document?.iconUrl: createPostState.document?.bytes ? createPostState.document?.icon :"images/pdf-img.svg"}`} alt="img" className="img-fluid" />
            </div>
            <div className="pdf-uploaded-text">
                <h4>{createPostState.document.name}</h4>
                <h5>{createPostState.document.size}{createPostState.document.bytes} {createPostState.document.sizeBytes}kb</h5>
            </div>
            <div className="pdf-uploaded-box-cancel" onClick={handleCancelDocUpload}>
                <img
                    src="images/uploaded-pdf-cancel-icon.svg"
                    alt="icon"
                    className="img-fluid"/>
            </div>
        </div>
    );
};

export default DocUpload;
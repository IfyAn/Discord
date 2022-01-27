import React, { useState } from "react";
import {
    FacebookShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookIcon,
  } from 'react-share';
import "./ShareModal.css";

function ShareModal({ setOpenModal }) {
    const shareUrl = 'https://github.com/IfyAn';
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Tell the world?</h1>
        </div>
        <div className="body">
        <FacebookShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <FacebookIcon size={70} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <WhatsappIcon size={70} round={true} />
        </WhatsappShareButton>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
import React from "react"
import ContentUploadReview from "./ContentUploadReview"
import ContentEditing from "./ContentEditing";

class ContentManagement extends React.Component {
  render() {
    return (
      <div>
        <h2 className="content-management-title">Content Management</h2>
        <ContentUploadReview id="content-upload-review"/>
        <ContentEditing id="content-editing"/>
      </div>
    );
  }
}

export default ContentManagement;
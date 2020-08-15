import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from "@material-ui/core"
import {get_all_feed} from "./../../../auth/authUtil"

class FeedbackReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ukey: 0,
      page: 0,
      itemsPerPage: 6,
      // the data below need a serverCall to get
      feedback: [
        // {
        //   description: "This product is so good, I finally figured out my health problems.This product is so good, I finally figured out my health problems.This product is so good, I finally figured out my health problems.",
        //   email: "testUser1"
        // },
        // {
        //   description: "This product is so bad, I almost killed myself.This product is so bad, I almost killed myself.This product is so bad, I almost killed myself.",
        //   email: "testUser2"
        // },
        // {
        //   description: "Thank all the doctors on this platform, I do not have money but I had chance to cure myself.Thank all the doctors on this platform, I do not have money but I had chance to cure myself.",
        //   email: "testUser3"
        // },
        // {
        //   description: "I don't believe it, I'd rather go to clinics. I don't believe it, I'd rather go to clinics. I don't believe it, I'd rather go to clinics. I don't believe it, I'd rather go to clinics. ",
        //   email: "testUser4"
        // },
      ]
    }
    get_all_feed(this)
  }

  handleChangePage = (e,page) =>{
    this.setState({page})
  }
 
  render() {
    const page = this.state.page;
    const itemsPerPage = this.state.itemsPerPage;
    return (
      <div>
        <h2 className="feedback-review">Feedback Review</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell >User</TableCell>
              <TableCell >Feedback</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.feedback
              .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
              .map((row,index) => (
                <TableRow key={index+20}>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.description}</TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[6]}
                count={this.state.feedback.length}
                rowsPerPage={this.state.itemsPerPage}
                page={this.state.page}
                onChangePage={this.handleChangePage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}

export default FeedbackReview;
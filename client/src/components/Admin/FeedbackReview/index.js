import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from "@material-ui/core"


class FeedbackReview extends React.Component {
  state = {
    ukey: 0,
    page: 0,
    itemsPerPage: 6,
    // the data below need a serverCall to get
    feedback: [
      {
        content: "This product is so good, I finally figured out my health problems.This product is so good, I finally figured out my health problems.This product is so good, I finally figured out my health problems.",
        user: "testUser1"
      },
      {
        content: "This product is so bad, I almost killed myself.This product is so bad, I almost killed myself.This product is so bad, I almost killed myself.",
        user: "testUser2"
      },
      {
        content: "Thank all the doctors on this platform, I do not have money but I had chance to cure myself.Thank all the doctors on this platform, I do not have money but I had chance to cure myself.",
        user: "testUser3"
      },
      {
        content: "I don't believe it, I'd rather go to clinics. I don't believe it, I'd rather go to clinics. I don't believe it, I'd rather go to clinics. I don't believe it, I'd rather go to clinics. ",
        user: "testUser4"
      },

    ]
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
              .map((row) => (
                <TableRow key={this.state.ukey++}>
                  <TableCell>{row.user}</TableCell>
                  <TableCell>{row.content}</TableCell>
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
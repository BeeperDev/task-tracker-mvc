const TicketList = require("../models/TicketList");

module.exports = {
  deleteTicket: (req, res) => {
    const id = req.params.id;
    TicketList.findByIdAndRemove(id, (err) => {
      if (err) return res.send(500, err);
      res.redirect("/");
    });
  },
  closeTicket: (req, res) => {
    const id = req.params.id;
    TicketList.findByIdAndUpdate(
      id,
      {
        status: "Closed",
      },
      (err) => {
        if (err) return res.status(500).send(err);
        res.redirect("/");
      }
    );
  },
  reopenTicket: (req, res) => {
    const id = req.params.id;
    TicketList.findByIdAndUpdate(
      id,
      {
        status: "Open",
      },
      (err) => {
        if (err) return res.status(500).send(err);
        res.redirect("/");
      }
    );
  },
};

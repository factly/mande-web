import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import { createMembership } from "../../actions/memberships";
import { createPayment } from "../../actions/payments";

const useStyles = makeStyles({
  paper: {
    width: "100%",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  item: {
    width: "80%",
    marginBottom: 10,
    padding: 0,
  },
});

export default function PlanItem({ id }) {
  const planDiv = React.useRef(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    planDiv?.current?.appendChild(script);
  }, [planDiv]);

  const { plan, currency, user } = useSelector(
    ({ plans, currencies, user }) => {
      const plan = plans.items[id];
      const currency = currencies.items[plan.currency_id];
      return {
        plan,
        currency,
        user,
      };
    }
  );

  const options = {
    key: "rzp_test_sL90Ct6IqbXpSh", // Enter the Key ID generated from the Dashboard
    amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Acme Corp",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
    prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "9999999999",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#3399cc",
    },
    handler: function (response) {
      console.log(response);
    },
  };

  const onBuy = async () => {
    if (!user.id) {
      window.location = `http://127.0.0.1:4455/.factly/kavach/web/auth/login?return_to=${window.location}`;
      return;
    }
    if (id) {
      const membership = await dispatch(createMembership({ plan_id: id }));

      options.order_id = membership.razorpay_order_id;
      options.handler = ({
        razorpay_payment_id,
        razorpay_signature,
        ...response
      }) => {
        dispatch(
          createPayment({
            for: "membership",
            entity_id: membership.id,
            razorpay_payment_id,
            razorpay_signature,
            gateway: "razorpay",
            status: "success",
            currency_id: 1,
          })
        );
      };
      const rz = new Razorpay(options);
      rz.on("payment.failed", function (response) {
        console.log(response.error);
      });
      rz.open();
    }
  };

  return (
    <div ref={planDiv}>
      <ListItem key={plan.id} className={classes.item} button>
        <Paper className={classes.paper} elevation={3}>
          <ListItemText
            primary={`${plan.name}`}
            secondary={`${currency.iso_code} ${plan.price}`}
          />
          <ListItemSecondaryAction className={classes.action} onClick={onBuy}>
            <Button size="small" color="primary" onClick={onBuy}>
              Buy
            </Button>
          </ListItemSecondaryAction>
        </Paper>
      </ListItem>
    </div>
  );
}

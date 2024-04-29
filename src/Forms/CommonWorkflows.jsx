//@flow

import * as React from "react";

import Button from "../components/Button/Button.jsx";
import Group from "../components/Group/Group.jsx";
import Icon from "../components/Icon/Icon.jsx";
import Section from "../components/Section/Section.jsx";
import Text from "../components/Text/Text.jsx";
import TextInput from "../components/TextInput/TextInput.jsx";
import TestPaymentMethods from "./TestPaymentMethods.jsx";

class CommonWorkflows extends React.Component {

    static CURRENCIES = [
        { value: "eur", label: "EUR" },
        { value: "usd", label: "USD" },
        { value: "aud", label: "AUD" },
    ];

  render() {
    const {
      onClickCancelPayment,
      onChangeTestCardNumber,
      onChangeTipAmount,
      onChangeSimulateOnReaderTip,
      onChangeTestPaymentMethod,
      cancelablePayment,
      workFlowDisabled,
      usingSimulator,
    } = this.props;
    return (
      <Section>
        <Group direction="column" spacing={16}>
          <Text size={16} color="dark">
            Charge manually
                </Text>
                <Group
                    direction="row"
                    alignment={{
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Text size={12} color="dark">
                        Charge amount
                    </Text>
                    <TextInput
                        value={this.props.chargeAmount}
                        onChange={this.props.onChangeChargeAmount}
                        ariaLabel="Charge amount"
                    />
                </Group>
          <Group direction="column" spacing={8}>
            {usingSimulator && (
              <TestPaymentMethods
                onChangeTestCardNumber={onChangeTestCardNumber}
                onChangeTipAmount={onChangeTipAmount}
                onChangeSimulateOnReaderTip={onChangeSimulateOnReaderTip}
                onChangeTestPaymentMethod={onChangeTestPaymentMethod}
              />
            )}
            <Button
              color="white"
              onClick={this.props.onClickCollectCardPayments}
              disabled={workFlowDisabled}
              justifyContent="left"
            >
              <Group direction="row">
                <Icon icon="payments" />
                <Text color="blue" size={14}>
                  Collect card payment
                </Text>
              </Group>
            </Button>

            <Button
              color="white"
              onClick={onClickCancelPayment}
              disabled={!cancelablePayment}
              justifyContent="left"
            >
              <Group direction="row">
                <Icon icon="cancel" />
                <Text color="blue" size={14}>
                  Cancel payment
                </Text>
              </Group>
            </Button>
          </Group>
        </Group>
      </Section>
    );
  }
}

export default CommonWorkflows;

import React from 'react';
import Button from "../components/Button/Button.jsx";
import Group from "../components/Group/Group.jsx";
import Icon from "../components/Icon/Icon.jsx";
import Section from "../components/Section/Section.jsx";
import Text from "../components/Text/Text.jsx";
import TextInput from "../components/TextInput/TextInput.jsx";
import Dropdown from "../components/Dropdown/Dropdown.jsx"; // Assume you have a Dropdown component

class CommonWorkflows extends React.Component {
    state = {
        currency: 'USD',
        chargeAmount: '',
        itemDescription: '',
        emailAddress: ''
    };

    handleInputChange = (field, value) => {
        this.setState({ [field]: value });
    };

    handlePayment = async () => {
        const { currency, chargeAmount, itemDescription, emailAddress } = this.state;
        // Function to call your backend service with these values
        await this.props.onSubmitPayment({ currency, chargeAmount, itemDescription, emailAddress });
    };

    render() {
        return (
            <Section>
                <Group direction="column" spacing={16}>
                    <Dropdown
                        label="Currency"
                        options={['USD', 'EUR', 'AUD']}
                        value={this.state.currency}
                        onChange={(value) => this.handleInputChange('currency', value)}
                    />
                    <TextInput
                        label="Charge Amount"
                        value={this.state.chargeAmount}
                        onChange={(e) => this.handleInputChange('chargeAmount', e.target.value)}
                    />
                    <TextInput
                        label="Item Description"
                        value={this.state.itemDescription}
                        onChange={(e) => this.handleInputChange('itemDescription', e.target.value)}
                    />
                    <TextInput
                        label="Email Address (Optional)"
                        value={this.state.emailAddress}
                        onChange={(e) => this.handleInputChange('emailAddress', e.target.value)}
                    />
                    <Button onClick={this.handlePayment}>
                        <Text>Collect Card Payment</Text>
                    </Button>
                </Group>
            </Section>
        );
    }
}

export default CommonWorkflows;

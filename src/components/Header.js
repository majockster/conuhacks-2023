import React from "react";
import { Header, Segment, Icon } from "semantic-ui-react";

const StockHeader = () => {
    return (
        <Segment>
            <Header as="h1" textAlign="center">
                <Icon name="chart line" size="big" />
                Exchange orders display
                <Header.Subheader>
                    Displaying orders from Aequitas, Alpha and Tsx exchanges on 2023-01-06 from  9:28:00 till 9:32:00
                </Header.Subheader>
            </Header>
        </Segment>
    );
};

export default StockHeader;

import { Layout, Typography } from "antd";
import React from "react";

const StaticHeader: React.FC = () => {
    return(
        <Layout className="bg-transparent">
            <Typography.Title level={4} className="font-bold font-['Quicksand'] !text-[#001489] !text-[32px] !leading-[40px]" >Carbon Data</Typography.Title>
            <Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#363A4F] !text-[18px] !mt-0">Great, you’re ready to upload this months data.</Typography.Title>
            <Typography.Paragraph className="font-['Quicksand'] font-light !text-[#363A4F] !text-[13px] !mt-0">The different categories on this page can be completed in any order.<br />once complete, the report is set up and ready to publish to your dashboard.</Typography.Paragraph>
        </Layout>
    )
}

export default StaticHeader;
import { Layout, Typography } from "antd";
import React, { useState } from "react";
import RightArrow from '../assets/RightArrow.svg';

const Summary = (props: SummaryProps) => {
    const { carPetrol, carDiesel, carAverage, carHybrid } = props;
    const { carPetrolEmployee, carDieselEmployee, carAverageEmployee, carHybridEmployee } = props;
  

    const [showData, setShowData] = useState(false);
    const [showDataEmployee, setShowDataEmployee] = useState(false);

    const handleType = (type: string | null) => {
        switch (type) {
            case "small-car":
                return "Small Car"
            case "medium-car":
                return "Medium Car"
            case "large-car":
                return "Large Car"
            default:
                return "Small Car"
        }
    }

    return (
        <Layout className="bg-transparent flex flex-col">
            <Typography.Title level={4} className="font-['Quicksand'] font-bold !text-[#001489] !text-[24px] !mt-0">Summary</Typography.Title>
            <Layout className="min-w-[309px] min-h-[322px] bg-[#FEFEFE] flex flex-col mt-3 rounded-[4px] shadow-[0px_0px_4px_0px_#00000040]">
                <div className="h-[42px] bg-[#001489] flex items-center rounded-[4px_4px_0px_0px]">
                    <Typography.Paragraph className="p-0 m-0 !mb-0 pl-3 text-[16px] text-[#FEFEFE] font-bold">December 2020</Typography.Paragraph>
                </div>
                <div className="pl-3 mt-3">
                    <div className="flex flex-row items-center justify-between cursor-pointer">
                        <div className="flex flex-row items-center">
                            <img src={RightArrow} className="w-[12px] h-[10px]" />
                            <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 ml-2 flex flex-row items-center text-[14px] text-[#001489] font-bold">Intensity metrics added</Typography.Paragraph>
                        </div>
                        <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-5 flex flex-row items-center text-[14px] text-[#001489] font-bold">(25)</Typography.Paragraph>
                    </div>
                    <div className="mt-3 cursor-pointer" onClick={() => setShowDataEmployee(!showDataEmployee)}>
                        <div className="flex flex-row items-center justify-between mt-3 cursor-pointer">
                            <div className="flex flex-row items-center">
                                <img src={RightArrow} className="w-[12px] h-[10px]" />
                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 ml-2 flex flex-row items-center text-[14px] text-[#001489] font-bold">Employee Travel</Typography.Paragraph>
                            </div>
                            <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-5 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">4,231 Kg CO2e</Typography.Paragraph>
                         </div>
                         {showDataEmployee && (
                            <div className="flex flex-col ml-5">
                                {carPetrol && carPetrol.length > 0 && (
                                    <div className="flex flex-col">
                                        {carPetrolEmployee.map((item) => (
                                            <div className="flex flex-row">
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-bold">{item.num1}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">{item.unit}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">{handleType(item.type)}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">- Car Petrol</Typography.Paragraph>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {carDieselEmployee && carDieselEmployee.length > 0 && (
                                    <div className="flex flex-col">
                                        {carDieselEmployee.map((item) => (
                                            <div className="flex flex-row">
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-bold">{item.num1}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">{item.unit}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">{handleType(item.type)}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">- Car Diesel</Typography.Paragraph>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {carAverageEmployee && carAverageEmployee.length > 0 && (
                                    <div className="flex flex-col">
                                        {carAverageEmployee.map((item) => (
                                            <div className="flex flex-row">
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-bold">{item.num1}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">{item.unit}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">{handleType(item.type)}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">- Car Average</Typography.Paragraph>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {carHybridEmployee && carHybridEmployee.length > 0 && (
                                    <div className="flex flex-col">
                                        {carHybridEmployee.map((item) => (
                                            <div className="flex flex-row">
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-bold">{item.num1}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">{item.unit}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">{handleType(item.type)}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">- Car Hybrid</Typography.Paragraph>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="mt-3 cursor-pointer" onClick={() => setShowData(!showData)}>
                        <div className="flex flex-row items-center justify-between cursor-pointer">
                            <div className="flex flex-row items-center">
                                <img src={RightArrow} className="w-[12px] h-[10px]" />
                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 ml-2 flex flex-row items-center text-[14px] text-[#001489] font-bold">Business Travel</Typography.Paragraph>
                            </div>
                            <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-5 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">4,231 Kg CO2e</Typography.Paragraph>
                        </div>
                        {showData && (
                            <div className="flex flex-col ml-5">
                                {carPetrol && carPetrol.length > 0 && (
                                    <div className="flex flex-col">
                                        {carPetrol.map((item) => (
                                            <div className="flex flex-row">
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-bold">{item.num1}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">{item.unit}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">{handleType(item.type)}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">- Car Petrol</Typography.Paragraph>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {carDiesel && carDiesel.length > 0 && (
                                    <div className="flex flex-col">
                                        {carDiesel.map((item) => (
                                            <div className="flex flex-row">
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-bold">{item.num1}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">{item.unit}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">{handleType(item.type)}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">- Car Diesel</Typography.Paragraph>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {carAverage && carAverage.length > 0 && (
                                    <div className="flex flex-col">
                                        {carAverage.map((item) => (
                                            <div className="flex flex-row">
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-bold">{item.num1}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">{item.unit}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">{handleType(item.type)}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">- Car Average</Typography.Paragraph>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {carHybrid && carHybrid.length > 0 && (
                                    <div className="flex flex-col">
                                        {carHybrid.map((item) => (
                                            <div className="flex flex-row">
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-bold">{item.num1}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">{item.unit}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-1 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">{handleType(item.type)}</Typography.Paragraph>
                                                <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">- Car Hybrid</Typography.Paragraph>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-row items-center justify-between mt-3 cursor-pointer">
                        <div className="flex flex-row items-center">
                            <img src={RightArrow} className="w-[12px] h-[10px]" />
                            <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 ml-2 flex flex-row items-center text-[14px] text-[#001489] font-bold">Energy Consumption</Typography.Paragraph>
                        </div>
                        <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-5 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">4,231 Kg CO2e</Typography.Paragraph>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-3 cursor-pointer">
                        <div className="flex flex-row items-center">
                            <img src={RightArrow} className="w-[12px] h-[10px]" />
                            <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 ml-2 flex flex-row items-center text-[14px] text-[#001489] font-bold">Detailed Carbon</Typography.Paragraph>
                        </div>
                        <Typography.Paragraph className="font-['Quicksand'] m-0 p-0 !mb-0 mr-5 flex flex-row items-center text-[12px] text-[##363A4F] font-normal">4,231 Kg CO2e</Typography.Paragraph>
                    </div>
                </div>
            </Layout>
        </Layout>
    )
}

export default Summary;

interface SummaryProps {
    carPetrol: InputInformation[];
    carDiesel: InputInformation[];
    carAverage: InputInformation[];
    carHybrid: InputInformation[];
    carPetrolEmployee: InputInformationEmployee[];
    carDieselEmployee: InputInformationEmployee[];
    carAverageEmployee: InputInformationEmployee[];
    carHybridEmployee: InputInformationEmployee[];
}

interface InputInformation {
    type: string | null;
    num1: number | null;
    unit: string | null;
    num2: number | null;
    driver: string;
    registrationNumber: string;
    checked: boolean;
}

interface InputInformationEmployee {
    type: string | null;
    num1: number | null;
    unit: string | null;
    num2: number | null;
    driver: string;
    registrationNumber: string;
    
}
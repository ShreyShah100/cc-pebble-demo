import { Layout, Select, Typography, InputNumber, Input } from "antd";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import DropdownIcon from "../assets/dropdown.svg";
import AddIcon from "../assets/Add.svg";

const CustomFormEmployee = (props: CustomFormEmployeeProps) => {
    const { 
        carPetrolEmployee, 
        setCarPetrolEmployee, 
        carDieselEmployee, 
        setCarDieselEmployee,
        carAverageEmployee,
        setCarAverageEmployee,
        carHybridEmployee,
        setCarHybridEmployee,
        
     
    } = props;
    const [petrolEmployeeInputData, setPetrolEmployeeInputData] = React.useState<MasterInputInformationEmployee>({
        type: null,
        num1: null,
        unit: null,
        num2: null,
        driver: "",
        registrationNumber: "",
      
       
    });

    const [dieselEmployeeInputData, setDieselEmployeeInputData] = React.useState<MasterInputInformationEmployee>({
        type: null,
        num1: null,
        unit: null,
        num2: null,
        driver: "",
        registrationNumber: "",
       
      
    });

    const [averageEmployeeInputData, setAverageEmployeeInputData] = React.useState<MasterInputInformationEmployee>({
        type: null,
        num1: null,
        unit: null,
        num2: null,
        driver: "",
        registrationNumber: "",
      
       
    });

    const [hybridEmployeeInputData, setHybridEmployeeInputData] = React.useState<MasterInputInformationEmployee>({
        type: null,
        num1: null,
        unit: null,
        num2: null,
        driver: "",
        registrationNumber: "",
       
      
    });
  
   
    return (
        <Layout className="fixed-box w-full h-full min-w-[829px] max-w-[830px] max-h-[471px] overflow-y-scroll p-[15px] min-h-[471px] mt-5 bg-[#FEFEFE] rounded-[4px] shadow-[0px_0px_4px_0px_#00000040]">
            <div>
                <Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0">Car Petrol</Typography.Title>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                        <Select
                            style={{ width: 120 }}
                            onChange={(value) => setPetrolEmployeeInputData({ ...petrolEmployeeInputData, ...{ type: value } })}
                            suffixIcon={null}
                            placeholder={"Car Type"}
                            value={petrolEmployeeInputData.type}
                            options={[
                                { value: 'small-car', label: 'Small Car' },
                                { value: 'medium-car', label: 'Medium Car' },
                                { value: 'large-car', label: 'Large Car' },
                            ]}
                            className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px_0px_0px_4px] min-w-[218px] max-w-[218px]"

                        />
                        <div className="flex justify-center items-center w-[33px] h-[36px] border-[1px] border-[#363A4F] border-l-[0px] rounded-[0px_4px_4px_0px]">
                            <img src={DropdownIcon} className="w-[12px] h-[6px]" />
                        </div>
                    </div>
                    <InputNumber onChange={(value: number | null) => setPetrolEmployeeInputData({ ...petrolEmployeeInputData, num1: value })} value={petrolEmployeeInputData.num1} className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[164px] max-w-[164px]" placeholder="miles/Km/litres" />
                    <div className="flex flex-row">
                        <Select
                            style={{ width: 120 }}
                            suffixIcon={null}
                            placeholder={"Unit"}
                            onChange={(value) => setPetrolEmployeeInputData({ ...petrolEmployeeInputData, unit: value })}
                            value={petrolEmployeeInputData.unit}
                            options={[
                                { value: 'miles', label: 'Miles' },
                                { value: 'km', label: 'Km' },
                                { value: 'ltr', label: 'Litres' },
                            ]}
                            className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px_0px_0px_4px] min-w-[123px] max-w-[123px]"

                        />
                        <div className="flex justify-center items-center w-[33px] h-[36px] border-[1px] border-[#363A4F] border-l-[0px] rounded-[0px_4px_4px_0px]">
                            <img src={DropdownIcon} className="w-[12px] h-[6px]" />
                        </div>
                    </div>
                    <InputNumber onChange={(value: number | null) => setPetrolEmployeeInputData({ ...petrolEmployeeInputData, num2: value })} value={petrolEmployeeInputData.num2} className="custom-select w-[134px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="miles/Km/litres" />
                    <div className="border-[1px] border-[#B8BFEA] w-[36px] h-[36px] rounded-[4px] flex justify-center items-center cursor-pointer">
                    
                        <img onClick={() => setCarPetrolEmployee((prev) => {
                            return [...prev, petrolEmployeeInputData]
                        })} src={AddIcon} className="" />
                       
                    </div>
                </div>
                <div className="flex flex-row justify-start mt-3">
                    <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setPetrolEmployeeInputData({ ...petrolEmployeeInputData, driver: event?.target?.value })
                        return false;
                    }} value={petrolEmployeeInputData.driver} className="custom-select w-[251px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="Driver Name" />
                    <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setPetrolEmployeeInputData({ ...petrolEmployeeInputData, registrationNumber: event?.target?.value })
                        return false;
                    }} value={petrolEmployeeInputData.registrationNumber} className="custom-select w-[302px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px] ml-[15px]" placeholder="Registration Number" />
                     
                
                </div>
                {carPetrolEmployee && carPetrolEmployee.length > 0 && (
                    <div>
                        {carPetrolEmployee.map((value: MasterInputInformationEmployee, index: number) => {
                            return (
                                <div className="mt-3" key={index}>
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-row">
                                            <Select
                                                disabled={true}
                                                style={{ width: 120 }}
                                                suffixIcon={null}
                                                placeholder={"Car Type"}
                                                value={value.type}
                                                options={[
                                                    { value: 'small-car', label: 'Small Car' },
                                                    { value: 'medium-car', label: 'Medium Car' },
                                                    { value: 'large-car', label: 'Large Car' },
                                                ]}
                                                className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[218px] max-w-[218px]"

                                            />
                                        </div>
                                        <InputNumber disabled={true} value={value.num1} className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[164px] max-w-[164px]" placeholder="miles/Km/litres" />
                                        <div className="flex flex-row">
                                            <Select
                                                disabled={true}
                                                style={{ width: 120 }}
                                                suffixIcon={null}
                                                placeholder={"Unit"}
                                                value={value.unit}
                                                options={[
                                                    { value: 'miles', label: 'Miles' },
                                                    { value: 'km', label: 'Km' },
                                                    { value: 'ltr', label: 'Litres' },
                                                ]}
                                                className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[123px] max-w-[123px]"

                                            />
                                        </div>
                                        <InputNumber disabled={true} value={value.num2} className="custom-select w-[134px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="miles/Km/litres" />
                                    </div>
                                    <div className="flex flex-row justify-start mt-3">
                                        <Input disabled value={value.driver} className="custom-select w-[251px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="Driver Name" />
                                        <Input disabled value={value.registrationNumber} className="custom-select w-[302px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px] ml-[15px]" placeholder="Registration Number" />
                                        
                                      
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                <div className="h-[1px] w-full border-[1px] border-[#B8BFEA] mt-5"></div>
            </div>
            <div className="mt-3">
                <Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0">Car Diesel</Typography.Title>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                        <Select
                            style={{ width: 120 }}
                            onChange={(value) => setDieselEmployeeInputData({ ...dieselEmployeeInputData, ...{ type: value } })}
                            suffixIcon={null}
                            placeholder={"Car Type"}
                            value={dieselEmployeeInputData.type}
                            options={[
                                { value: 'small-car', label: 'Small Car' },
                                { value: 'medium-car', label: 'Medium Car' },
                                { value: 'large-car', label: 'Large Car' },
                            ]}
                            className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px_0px_0px_4px] min-w-[218px] max-w-[218px]"

                        />
                        <div className="flex justify-center items-center w-[33px] h-[36px] border-[1px] border-[#363A4F] border-l-[0px] rounded-[0px_4px_4px_0px]">
                            <img src={DropdownIcon} className="w-[12px] h-[6px]" />
                        </div>
                    </div>
                    <InputNumber onChange={(value: number | null) => setDieselEmployeeInputData({ ...dieselEmployeeInputData, num1: value })} value={dieselEmployeeInputData.num1} className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[164px] max-w-[164px]" placeholder="miles/Km/litres" />
                    <div className="flex flex-row">
                        <Select
                            style={{ width: 120 }}
                            suffixIcon={null}
                            placeholder={"Unit"}
                            onChange={(value) => setDieselEmployeeInputData({ ...dieselEmployeeInputData, unit: value })}
                            value={dieselEmployeeInputData.unit}
                            options={[
                                { value: 'miles', label: 'Miles' },
                                { value: 'km', label: 'Km' },
                                { value: 'ltr', label: 'Litres' },
                            ]}
                            className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px_0px_0px_4px] min-w-[123px] max-w-[123px]"

                        />
                        <div className="flex justify-center items-center w-[33px] h-[36px] border-[1px] border-[#363A4F] border-l-[0px] rounded-[0px_4px_4px_0px]">
                            <img src={DropdownIcon} className="w-[12px] h-[6px]" />
                        </div>
                    </div>
                    <InputNumber onChange={(value: number | null) => setDieselEmployeeInputData({ ...dieselEmployeeInputData, num2: value })} value={dieselEmployeeInputData.num2} className="custom-select w-[134px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="miles/Km/litres" />
                    <div className="border-[1px] border-[#B8BFEA] w-[36px] h-[36px] rounded-[4px] flex justify-center items-center cursor-pointer">
                        <img onClick={() => setCarDieselEmployee((prev) => {
                            return [...prev, dieselEmployeeInputData]
                        })} src={AddIcon} className="" />
                    </div>
                </div>
                <div className="flex flex-row justify-start mt-3">
                    <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setDieselEmployeeInputData({ ...dieselEmployeeInputData, driver: event?.target?.value })
                        return false;
                    }} value={dieselEmployeeInputData.driver} className="custom-select w-[251px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="Driver Name" />
                    <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setDieselEmployeeInputData({ ...dieselEmployeeInputData, registrationNumber: event?.target?.value })
                        return false;
                    }} value={dieselEmployeeInputData.registrationNumber} className="custom-select w-[302px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px] ml-[15px]" placeholder="Registration Number" />
                   
                  
                </div>
                {carDieselEmployee && carDieselEmployee.length > 0 && (
                    <div>
                        {carDieselEmployee.map((value: MasterInputInformationEmployee, index: number) => {
                            return (
                                <div className="mt-3" key={index}>
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-row">
                                            <Select
                                                disabled={true}
                                                style={{ width: 120 }}
                                                suffixIcon={null}
                                                placeholder={"Car Type"}
                                                value={value.type}
                                                options={[
                                                    { value: 'small-car', label: 'Small Car' },
                                                    { value: 'medium-car', label: 'Medium Car' },
                                                    { value: 'large-car', label: 'Large Car' },
                                                ]}
                                                className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[218px] max-w-[218px]"

                                            />
                                        </div>
                                        <InputNumber disabled={true} value={value.num1} className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[164px] max-w-[164px]" placeholder="miles/Km/litres" />
                                        <div className="flex flex-row">
                                            <Select
                                                disabled={true}
                                                style={{ width: 120 }}
                                                suffixIcon={null}
                                                placeholder={"Unit"}
                                                value={value.unit}
                                                options={[
                                                    { value: 'miles', label: 'Miles' },
                                                    { value: 'km', label: 'Km' },
                                                    { value: 'ltr', label: 'Litres' },
                                                ]}
                                                className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[123px] max-w-[123px]"

                                            />
                                        </div>
                                        <InputNumber disabled={true} value={value.num2} className="custom-select w-[134px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="miles/Km/litres" />
                                    </div>
                                    <div className="flex flex-row justify-start mt-3">
                                        <Input disabled value={value.driver} className="custom-select w-[251px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="Driver Name" />
                                        <Input disabled value={value.registrationNumber} className="custom-select w-[302px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px] ml-[15px]" placeholder="Registration Number" />
                                        
                                       
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                <div className="h-[1px] w-full border-[1px] border-[#B8BFEA] mt-5"></div>
            </div>
            <div className="mt-3">
                <Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0">Car Average</Typography.Title>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                        <Select
                            style={{ width: 120 }}
                            onChange={(value) => setAverageEmployeeInputData({ ...averageEmployeeInputData, ...{ type: value } })}
                            suffixIcon={null}
                            placeholder={"Car Type"}
                            value={averageEmployeeInputData.type}
                            options={[
                                { value: 'small-car', label: 'Small Car' },
                                { value: 'medium-car', label: 'Medium Car' },
                                { value: 'large-car', label: 'Large Car' },
                            ]}
                            className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px_0px_0px_4px] min-w-[218px] max-w-[218px]"

                        />
                        <div className="flex justify-center items-center w-[33px] h-[36px] border-[1px] border-[#363A4F] border-l-[0px] rounded-[0px_4px_4px_0px]">
                            <img src={DropdownIcon} className="w-[12px] h-[6px]" />
                        </div>
                    </div>
                    <InputNumber onChange={(value: number | null) => setAverageEmployeeInputData({ ...averageEmployeeInputData, num1: value })} value={averageEmployeeInputData.num1} className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[164px] max-w-[164px]" placeholder="miles/Km/litres" />
                    <div className="flex flex-row">
                        <Select
                            style={{ width: 120 }}
                            suffixIcon={null}
                            placeholder={"Unit"}
                            onChange={(value) => setAverageEmployeeInputData({ ...averageEmployeeInputData, unit: value })}
                            value={averageEmployeeInputData.unit}
                            options={[
                                { value: 'miles', label: 'Miles' },
                                { value: 'km', label: 'Km' },
                                { value: 'ltr', label: 'Litres' },
                            ]}
                            className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px_0px_0px_4px] min-w-[123px] max-w-[123px]"

                        />
                        <div className="flex justify-center items-center w-[33px] h-[36px] border-[1px] border-[#363A4F] border-l-[0px] rounded-[0px_4px_4px_0px]">
                            <img src={DropdownIcon} className="w-[12px] h-[6px]" />
                        </div>
                    </div>
                    <InputNumber onChange={(value: number | null) => setAverageEmployeeInputData({ ...averageEmployeeInputData, num2: value })} value={averageEmployeeInputData.num2} className="custom-select w-[134px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="miles/Km/litres" />
                    <div className="border-[1px] border-[#B8BFEA] w-[36px] h-[36px] rounded-[4px] flex justify-center items-center cursor-pointer">
                        <img onClick={() => setCarAverageEmployee((prev) => {
                            return [...prev, averageEmployeeInputData]
                        })} src={AddIcon} className="" />
                    </div>
                </div>
                <div className="flex flex-row justify-start mt-3">
                    <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setAverageEmployeeInputData({ ...averageEmployeeInputData, driver: event?.target?.value })
                        return false;
                    }} value={averageEmployeeInputData.driver} className="custom-select w-[251px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="Driver Name" />
                    <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setAverageEmployeeInputData({ ...averageEmployeeInputData, registrationNumber: event?.target?.value })
                        return false;
                    }} value={averageEmployeeInputData.registrationNumber} className="custom-select w-[302px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px] ml-[15px]" placeholder="Registration Number" />
                    
                  
                </div>
                {carAverageEmployee && carAverageEmployee.length > 0 && (
                    <div>
                        {carAverageEmployee.map((value: MasterInputInformationEmployee, index: number) => {
                            return (
                                <div className="mt-3" key={index}>
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-row">
                                            <Select
                                                disabled={true}
                                                style={{ width: 120 }}
                                                suffixIcon={null}
                                                placeholder={"Car Type"}
                                                value={value.type}
                                                options={[
                                                    { value: 'small-car', label: 'Small Car' },
                                                    { value: 'medium-car', label: 'Medium Car' },
                                                    { value: 'large-car', label: 'Large Car' },
                                                ]}
                                                className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[218px] max-w-[218px]"

                                            />
                                        </div>
                                        <InputNumber disabled={true} value={value.num1} className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[164px] max-w-[164px]" placeholder="miles/Km/litres" />
                                        <div className="flex flex-row">
                                            <Select
                                                disabled={true}
                                                style={{ width: 120 }}
                                                suffixIcon={null}
                                                placeholder={"Unit"}
                                                value={value.unit}
                                                options={[
                                                    { value: 'miles', label: 'Miles' },
                                                    { value: 'km', label: 'Km' },
                                                    { value: 'ltr', label: 'Litres' },
                                                ]}
                                                className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[123px] max-w-[123px]"

                                            />
                                        </div>
                                        <InputNumber disabled={true} value={value.num2} className="custom-select w-[134px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="miles/Km/litres" />
                                    </div>
                                    <div className="flex flex-row justify-start mt-3">
                                        <Input disabled value={value.driver} className="custom-select w-[251px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="Driver Name" />
                                        <Input disabled value={value.registrationNumber} className="custom-select w-[302px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px] ml-[15px]" placeholder="Registration Number" />
                                       
                                      
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                <div className="h-[1px] w-full border-[1px] border-[#B8BFEA] mt-5"></div>
            </div>
            <div className="mt-3">
                <Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0">Car Hybrid</Typography.Title>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                        <Select
                            style={{ width: 120 }}
                            onChange={(value) => setHybridEmployeeInputData({ ...hybridEmployeeInputData, ...{ type: value } })}
                            suffixIcon={null}
                            placeholder={"Car Type"}
                            value={hybridEmployeeInputData.type}
                            options={[
                                { value: 'small-car', label: 'Small Car' },
                                { value: 'medium-car', label: 'Medium Car' },
                                { value: 'large-car', label: 'Large Car' },
                            ]}
                            className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px_0px_0px_4px] min-w-[218px] max-w-[218px]"

                        />
                        <div className="flex justify-center items-center w-[33px] h-[36px] border-[1px] border-[#363A4F] border-l-[0px] rounded-[0px_4px_4px_0px]">
                            <img src={DropdownIcon} className="w-[12px] h-[6px]" />
                        </div>
                    </div>
                    <InputNumber onChange={(value: number | null) => setHybridEmployeeInputData({ ...hybridEmployeeInputData, num1: value })} value={hybridEmployeeInputData.num1} className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[164px] max-w-[164px]" placeholder="miles/Km/litres" />
                    <div className="flex flex-row">
                        <Select
                            style={{ width: 120 }}
                            suffixIcon={null}
                            placeholder={"Unit"}
                            onChange={(value) => setHybridEmployeeInputData({ ...hybridEmployeeInputData, unit: value })}
                            value={hybridEmployeeInputData.unit}
                            options={[
                                { value: 'miles', label: 'Miles' },
                                { value: 'km', label: 'Km' },
                                { value: 'ltr', label: 'Litres' },
                            ]}
                            className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px_0px_0px_4px] min-w-[123px] max-w-[123px]"

                        />
                        <div className="flex justify-center items-center w-[33px] h-[36px] border-[1px] border-[#363A4F] border-l-[0px] rounded-[0px_4px_4px_0px]">
                            <img src={DropdownIcon} className="w-[12px] h-[6px]" />
                        </div>
                    </div>
                    <InputNumber onChange={(value: number | null) => setHybridEmployeeInputData({ ...hybridEmployeeInputData, num2: value })} value={hybridEmployeeInputData.num2} className="custom-select w-[134px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="miles/Km/litres" />
                    <div className="border-[1px] border-[#B8BFEA] w-[36px] h-[36px] rounded-[4px] flex justify-center items-center cursor-pointer">
                        <img onClick={() => setCarHybridEmployee((prev) => {
                            return [...prev, hybridEmployeeInputData]
                        })} src={AddIcon} className="" />
                    </div>
                </div>
                <div className="flex flex-row justify-start mt-3">
                    <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setHybridEmployeeInputData({ ...hybridEmployeeInputData, driver: event?.target?.value })
                        return false;
                    }} value={hybridEmployeeInputData.driver} className="custom-select w-[251px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="Driver Name" />
                    <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setHybridEmployeeInputData({ ...hybridEmployeeInputData, registrationNumber: event?.target?.value })
                        return false;
                    }} value={hybridEmployeeInputData.registrationNumber} className="custom-select w-[302px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px] ml-[15px]" placeholder="Registration Number" />
                    
                 
                </div>
                {carHybridEmployee && carHybridEmployee.length > 0 && (
                    <div>
                        {carHybridEmployee.map((value: MasterInputInformationEmployee, index: number) => {
                            return (
                                <div className="mt-3" key={index}>
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-row">
                                            <Select
                                                disabled={true}
                                                style={{ width: 120 }}
                                                suffixIcon={null}
                                                placeholder={"Car Type"}
                                                value={value.type}
                                                options={[
                                                    { value: 'small-car', label: 'Small Car' },
                                                    { value: 'medium-car', label: 'Medium Car' },
                                                    { value: 'large-car', label: 'Large Car' },
                                                ]}
                                                className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[218px] max-w-[218px]"

                                            />
                                        </div>
                                        <InputNumber disabled={true} value={value.num1} className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[164px] max-w-[164px]" placeholder="miles/Km/litres" />
                                        <div className="flex flex-row">
                                            <Select
                                                disabled={true}
                                                style={{ width: 120 }}
                                                suffixIcon={null}
                                                placeholder={"Unit"}
                                                value={value.unit}
                                                options={[
                                                    { value: 'miles', label: 'Miles' },
                                                    { value: 'km', label: 'Km' },
                                                    { value: 'ltr', label: 'Litres' },
                                                ]}
                                                className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[123px] max-w-[123px]"

                                            />
                                        </div>
                                        <InputNumber disabled={true} value={value.num2} className="custom-select w-[134px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="miles/Km/litres" />
                                    </div>
                                    <div className="flex flex-row justify-start mt-3">
                                        <Input disabled value={value.driver} className="custom-select w-[251px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="Driver Name" />
                                        <Input disabled value={value.registrationNumber} className="custom-select w-[302px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px] ml-[15px]" placeholder="Registration Number" />
                                      
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default CustomFormEmployee;

interface CustomFormEmployeeProps {
    carPetrolEmployee: MasterInputInformationEmployee[];
    carDieselEmployee: MasterInputInformationEmployee[];
    carAverageEmployee: MasterInputInformationEmployee[];
    carHybridEmployee: MasterInputInformationEmployee[];
  
    setCarPetrolEmployee: Dispatch<SetStateAction<MasterInputInformationEmployee[]>>
    setCarDieselEmployee: Dispatch<SetStateAction<MasterInputInformationEmployee[]>>
    setCarAverageEmployee: Dispatch<SetStateAction<MasterInputInformationEmployee[]>>
    setCarHybridEmployee: Dispatch<SetStateAction<MasterInputInformationEmployee[]>>
   
}

interface MasterInputInformationEmployee {
    type: string | null;
    num1: number | null;
    unit: string | null;
    num2: number | null;
    driver: string;
    registrationNumber: string;
   
   
}
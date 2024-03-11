import { Layout, Select, Typography, InputNumber, Input, Checkbox } from "antd";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import DropdownIcon from "../assets/dropdown.svg";
import AddIcon from "../assets/Add.svg";

const CustomForm = (props: CustomFormProps) => {
    const { 
        carPetrol, 
        setCarPetrol, 
        carDiesel, 
        setCarDiesel,
        carAverage,
        setCarAverage,
        carHybrid,
        setCarHybrid
    } = props;
    const [petrolInputData, setPetrolInputData] = React.useState<InputInformation>({
        type: null,
        num1: null,
        unit: null,
        num2: null,
        driver: "",
        registrationNumber: "",
        checked: false
    });

    const [dieselInputData, setDieselInputData] = React.useState<InputInformation>({
        type: null,
        num1: null,
        unit: null,
        num2: null,
        driver: "",
        registrationNumber: "",
        checked: false
    });

    const [averageInputData, setAverageInputData] = React.useState<InputInformation>({
        type: null,
        num1: null,
        unit: null,
        num2: null,
        driver: "",
        registrationNumber: "",
        checked: false
    });

    const [hybridInputData, setHybridInputData] = React.useState<InputInformation>({
        type: null,
        num1: null,
        unit: null,
        num2: null,
        driver: "",
        registrationNumber: "",
        checked: false
    });

    return (
        <Layout className="fixed-box w-full h-full min-w-[829px] max-w-[830px] max-h-[471px] overflow-y-scroll p-[15px] min-h-[471px] mt-5 bg-[#FEFEFE] rounded-[4px] shadow-[0px_0px_4px_0px_#00000040]">
            <div>
                <Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0">Car Petrol</Typography.Title>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                        <Select
                            style={{ width: 120 }}
                            onChange={(value) => setPetrolInputData({ ...petrolInputData, ...{ type: value } })}
                            suffixIcon={null}
                            placeholder={"Car Type"}
                            value={petrolInputData.type}
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
                    <InputNumber onChange={(value: number | null) => setPetrolInputData({ ...petrolInputData, num1: value })} value={petrolInputData.num1} className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[164px] max-w-[164px]" placeholder="miles/Km/litres" />
                    <div className="flex flex-row">
                        <Select
                            style={{ width: 120 }}
                            suffixIcon={null}
                            placeholder={"Unit"}
                            onChange={(value) => setPetrolInputData({ ...petrolInputData, unit: value })}
                            value={petrolInputData.unit}
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
                    <InputNumber onChange={(value: number | null) => setPetrolInputData({ ...petrolInputData, num2: value })} value={petrolInputData.num2} className="custom-select w-[134px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="miles/Km/litres" />
                    <div className="border-[1px] border-[#B8BFEA] w-[36px] h-[36px] rounded-[4px] flex justify-center items-center cursor-pointer">
                        <img onClick={() => setCarPetrol((prev) => {
                            return [...prev, petrolInputData]
                        })} src={AddIcon} className="" />
                    </div>
                </div>
                <div className="flex flex-row justify-start mt-3">
                    <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setPetrolInputData({ ...petrolInputData, driver: event?.target?.value })
                        return false;
                    }} value={petrolInputData.driver} className="custom-select w-[251px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="Driver Name" />
                    <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setPetrolInputData({ ...petrolInputData, registrationNumber: event?.target?.value })
                        return false;
                    }} value={petrolInputData.registrationNumber} className="custom-select w-[302px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px] ml-[15px]" placeholder="Registration Number" />
                    <Checkbox disabled={false} onChange={(e) => setPetrolInputData({...petrolInputData, checked: e.target.checked})} className="flex justify-center items-center ml-3">
                        Owned
                    </Checkbox>
                </div>
                {carPetrol && carPetrol.length > 0 && (
                    <div>
                        {carPetrol.map((value: InputInformation, index: number) => {
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
                                        <Checkbox disabled={true} checked={value?.checked} className="flex justify-center items-center ml-3">
                                            Owned
                                        </Checkbox>
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
                            onChange={(value) => setDieselInputData({ ...dieselInputData, ...{ type: value } })}
                            suffixIcon={null}
                            placeholder={"Car Type"}
                            value={dieselInputData.type}
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
                    <InputNumber onChange={(value: number | null) => setDieselInputData({ ...dieselInputData, num1: value })} value={dieselInputData.num1} className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[164px] max-w-[164px]" placeholder="miles/Km/litres" />
                    <div className="flex flex-row">
                        <Select
                            style={{ width: 120 }}
                            suffixIcon={null}
                            placeholder={"Unit"}
                            onChange={(value) => setDieselInputData({ ...dieselInputData, unit: value })}
                            value={dieselInputData.unit}
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
                    <InputNumber onChange={(value: number | null) => setDieselInputData({ ...dieselInputData, num2: value })} value={dieselInputData.num2} className="custom-select w-[134px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="miles/Km/litres" />
                    <div className="border-[1px] border-[#B8BFEA] w-[36px] h-[36px] rounded-[4px] flex justify-center items-center cursor-pointer">
                        <img onClick={() => setCarDiesel((prev) => {
                            return [...prev, dieselInputData]
                        })} src={AddIcon} className="" />
                    </div>
                </div>
                <div className="flex flex-row justify-start mt-3">
                    <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setDieselInputData({ ...dieselInputData, driver: event?.target?.value })
                        return false;
                    }} value={dieselInputData.driver} className="custom-select w-[251px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="Driver Name" />
                    <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setDieselInputData({ ...dieselInputData, registrationNumber: event?.target?.value })
                        return false;
                    }} value={dieselInputData.registrationNumber} className="custom-select w-[302px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px] ml-[15px]" placeholder="Registration Number" />
                    <Checkbox disabled={false} onChange={(e) => setDieselInputData({...dieselInputData, checked: e.target.checked})} className="flex justify-center items-center ml-3">
                        Owned
                    </Checkbox>
                </div>
                {carDiesel && carDiesel.length > 0 && (
                    <div>
                        {carDiesel.map((value: InputInformation, index: number) => {
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
                                        <Checkbox disabled={true} checked={value?.checked} className="flex justify-center items-center ml-3">
                                            Owned
                                        </Checkbox>
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
                            onChange={(value) => setAverageInputData({ ...averageInputData, ...{ type: value } })}
                            suffixIcon={null}
                            placeholder={"Car Type"}
                            value={averageInputData.type}
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
                    <InputNumber onChange={(value: number | null) => setAverageInputData({ ...averageInputData, num1: value })} value={averageInputData.num1} className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[164px] max-w-[164px]" placeholder="miles/Km/litres" />
                    <div className="flex flex-row">
                        <Select
                            style={{ width: 120 }}
                            suffixIcon={null}
                            placeholder={"Unit"}
                            onChange={(value) => setAverageInputData({ ...averageInputData, unit: value })}
                            value={averageInputData.unit}
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
                    <InputNumber onChange={(value: number | null) => setAverageInputData({ ...averageInputData, num2: value })} value={averageInputData.num2} className="custom-select w-[134px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="miles/Km/litres" />
                    <div className="border-[1px] border-[#B8BFEA] w-[36px] h-[36px] rounded-[4px] flex justify-center items-center cursor-pointer">
                        <img onClick={() => setCarAverage((prev) => {
                            return [...prev, averageInputData]
                        })} src={AddIcon} className="" />
                    </div>
                </div>
                <div className="flex flex-row justify-start mt-3">
                    <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setAverageInputData({ ...averageInputData, driver: event?.target?.value })
                        return false;
                    }} value={averageInputData.driver} className="custom-select w-[251px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="Driver Name" />
                    <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setAverageInputData({ ...averageInputData, registrationNumber: event?.target?.value })
                        return false;
                    }} value={averageInputData.registrationNumber} className="custom-select w-[302px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px] ml-[15px]" placeholder="Registration Number" />
                    <Checkbox disabled={false} onChange={(e) => setAverageInputData({...averageInputData, checked: e.target.checked})} className="flex justify-center items-center ml-3">
                        Owned
                    </Checkbox>
                </div>
                {carAverage && carAverage.length > 0 && (
                    <div>
                        {carAverage.map((value: InputInformation, index: number) => {
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
                                        <Checkbox disabled={true} checked={value?.checked} className="flex justify-center items-center ml-3">
                                            Owned
                                        </Checkbox>
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
                            onChange={(value) => setHybridInputData({ ...hybridInputData, ...{ type: value } })}
                            suffixIcon={null}
                            placeholder={"Car Type"}
                            value={hybridInputData.type}
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
                    <InputNumber onChange={(value: number | null) => setHybridInputData({ ...hybridInputData, num1: value })} value={hybridInputData.num1} className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[164px] max-w-[164px]" placeholder="miles/Km/litres" />
                    <div className="flex flex-row">
                        <Select
                            style={{ width: 120 }}
                            suffixIcon={null}
                            placeholder={"Unit"}
                            onChange={(value) => setHybridInputData({ ...hybridInputData, unit: value })}
                            value={hybridInputData.unit}
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
                    <InputNumber onChange={(value: number | null) => setHybridInputData({ ...hybridInputData, num2: value })} value={hybridInputData.num2} className="custom-select w-[134px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="miles/Km/litres" />
                    <div className="border-[1px] border-[#B8BFEA] w-[36px] h-[36px] rounded-[4px] flex justify-center items-center cursor-pointer">
                        <img onClick={() => setCarHybrid((prev) => {
                            return [...prev, hybridInputData]
                        })} src={AddIcon} className="" />
                    </div>
                </div>
                <div className="flex flex-row justify-start mt-3">
                    <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setHybridInputData({ ...hybridInputData, driver: event?.target?.value })
                        return false;
                    }} value={hybridInputData.driver} className="custom-select w-[251px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="Driver Name" />
                    <Input onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        setHybridInputData({ ...hybridInputData, registrationNumber: event?.target?.value })
                        return false;
                    }} value={hybridInputData.registrationNumber} className="custom-select w-[302px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px] ml-[15px]" placeholder="Registration Number" />
                    <Checkbox disabled={false} onChange={(e) => setHybridInputData({...hybridInputData, checked: e.target.checked})} className="flex justify-center items-center ml-3">
                        Owned
                    </Checkbox>
                </div>
                {carHybrid && carHybrid.length > 0 && (
                    <div>
                        {carHybrid.map((value: InputInformation, index: number) => {
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
                                        <Checkbox disabled={true} checked={value?.checked} className="flex justify-center items-center ml-3">
                                            Owned
                                        </Checkbox>
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

export default CustomForm;

interface CustomFormProps {
    carPetrol: InputInformation[];
    carDiesel: InputInformation[];
    carAverage: InputInformation[];
    carHybrid: InputInformation[];
    setCarPetrol: Dispatch<SetStateAction<InputInformation[]>>
    setCarDiesel: Dispatch<SetStateAction<InputInformation[]>>
    setCarAverage: Dispatch<SetStateAction<InputInformation[]>>
    setCarHybrid: Dispatch<SetStateAction<InputInformation[]>>
}

interface InputInformation {
    type: string | null;
    num1: number | null;
    unit: string | null;
    num2: number | null;
    driver: string;
    registrationNumber: string;
    checked: boolean
}
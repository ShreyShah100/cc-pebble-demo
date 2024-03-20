import { Layout } from "antd";
import React from "react";
import StaticHeader from "./components/StaticHeader";
import CustomForm from "./components/CustomForm";
import Summary from "./components/Summary";
import CompanyInfo from "./components/CompanyInfo";
import DetailCarbon from "./components/DetailCarbon";
import CompanyInfoIcon from "./assets/Building.svg";
import EmployeeIcon from "./assets/Employee travel.svg";
import BusinessIcon from "./assets/business travel.svg";
import EnergyIcon from "./assets/energy consumption.svg";
import DetailIcon from "./assets/Detailed Carbon.svg";
import CarbonIcon from "./assets/Co2 Offsetting.svg";
import CompanyInfoActiveIcon from "./assets/Buildinghover.svg";
import EmployeeActiveIcon from "./assets/Employee travelhover.svg";
import BusinessActiveIcon from "./assets/business travelhover.svg";
import EnergyActiveIcon from "./assets/energy consumptionhover.svg";
import DetailActiveIcon from "./assets/Detailed Carbonhover.svg";
import CarbonActiveIcon from "./assets/Co2 Offsettinghover.svg";
import CustomFormEmployee from "./components/CustomFormEmployee";
import CarbonOffset from "./components/CarbonOffset";
import EnergyConsuption from "./components/EnergyConsucption";


const App: React.FC = () => {

  const [activeTab, setActiveTab] = React.useState<string>("tab-4");
  const [carPetrol, setCarPetrol] = React.useState<MasterInputInformation[]>([]);
  const [carDiesel, setCarDiesel] = React.useState<MasterInputInformation[]>([]);
  const [carAverage, setCarAverage] = React.useState<MasterInputInformation[]>([]);
  const [carHybrid, setCarHybrid] = React.useState<MasterInputInformation[]>([]);

  const [carPetrolEmployee, setCarPetrolEmployee] = React.useState<MasterInputInformationEmployee[]>([]);
  const [carDieselEmployee, setCarDieselEmployee] = React.useState<MasterInputInformationEmployee[]>([]);
  const [carAverageEmployee, setCarAverageEmployee] = React.useState<MasterInputInformationEmployee[]>([]);
  const [carHybridEmployee, setCarHybridEmployee] = React.useState<MasterInputInformationEmployee[]>([]);
  const renderContent = () => {
    switch (activeTab) {
      case "tab-1":
        return <CompanyInfo/>
      case "tab-2":
        return <CustomFormEmployee
        carPetrolEmployee={carPetrolEmployee}
        setCarPetrolEmployee={setCarPetrolEmployee}
        carDieselEmployee={carDieselEmployee}
        setCarDieselEmployee={setCarDieselEmployee}
        carAverageEmployee={carAverageEmployee}
        setCarAverageEmployee={setCarAverageEmployee}
        carHybridEmployee={carHybridEmployee}
        setCarHybridEmployee={setCarHybridEmployee}
        
      />
      case "tab-3":
        return <CustomForm
          carPetrol={carPetrol}
          setCarPetrol={setCarPetrol}
          carDiesel={carDiesel}
          setCarDiesel={setCarDiesel}
          carAverage={carAverage}
          setCarAverage={setCarAverage}
          carHybrid={carHybrid}
          setCarHybrid={setCarHybrid}
         
        />
      case "tab-4":
        return <EnergyConsuption/>
      case "tab-5":
        return <DetailCarbon/>
      case "tab-6":
        return <CarbonOffset/>
    }
  }
  return (
    <Layout className="max-w-[1100px] m-auto bg-transparent mt-2 mb-2">
      <StaticHeader />
      <Layout className="bg-transparent flex flex-row">
        <div className="w-full max-width-[890px]">
          <div className="flex flex-row">
            <div className={`flex flex-row min-w-[276px] cursor-pointer min-h-[36px] border-[2px] border-[#B8BFEA] justify-start items-center bg-[#FEFEFE] rounded-tl-[4px] ${activeTab === "tab-1" && '!bg-[#001489]'}`} onClick={() => setActiveTab("tab-1")}>
            {activeTab === "tab-1" ? (
              <img src={CompanyInfoActiveIcon} className="ml-2"/>):(<img src={CompanyInfoIcon} className="ml-2"/>)}
              <label className={`font-['Quicksand'] cursor-pointer !text-[#001489] text-[16px] ml-2 font-bold ${activeTab === "tab-1" && '!text-[#FEFEFE]'}`}>Company Information</label>
            </div>
            <div className={`flex min-w-[276px] cursor-pointer min-h-[36px] border-[2px] border-[#B8BFEA] justify-start items-center bg-[#FEFEFE] border-l-[0px] ${activeTab === "tab-2" && '!bg-[#001489]'}`} onClick={() => setActiveTab("tab-2")}>
            {activeTab === "tab-2" ? (
            <img src={EmployeeActiveIcon} className="ml-2"/>):(<img src={EmployeeIcon} className="ml-2"/>)}
              <label className={`font-['Quicksand'] cursor-pointer !text-[#001489] ml-2 text-[16px] font-bold ${activeTab === "tab-2" && '!text-[#FEFEFE]'}`}>Employee Travel</label>
            </div>
            <div className={`flex min-w-[276px] cursor-pointer min-h-[36px] border-[2px] border-[#B8BFEA] justify-start items-center bg-[#FEFEFE] border-l-[0px] rounded-tr-[4px] ${activeTab === "tab-3" && '!bg-[#001489]'}`} onClick={() => setActiveTab("tab-3")}>
            {activeTab === "tab-3" ? (
            <img src={BusinessActiveIcon} className="ml-2"/>):( <img src={BusinessIcon} className="ml-2 "/>)}
              <label className={`font-['Quicksand'] cursor-pointer !text-[#001489] ml-2 text-[16px] font-bold ${activeTab === "tab-3" && '!text-[#FEFEFE]'}`}>Business Travel</label>
            </div>
          </div>
          <div className="flex flex-row">
            <div className={`flex min-w-[276px] cursor-pointer min-h-[36px] border-[2px] border-[#B8BFEA] justify-start items-center bg-[#FEFEFE] border-t-[0px] rounded-bl-[4px] ${activeTab === "tab-4" && '!bg-[#001489]'}`} onClick={() => setActiveTab("tab-4")}>
            {activeTab === "tab-4" ? (
            <img src={EnergyActiveIcon} className="ml-2"/>):(<img src={EnergyIcon} className="ml-2"/>)}
              <label className={`font-['Quicksand'] cursor-pointer !text-[#001489] ml-2 text-[16px] font-bold ${activeTab === "tab-4" && '!text-[#FEFEFE]'}`}>Energy Consumption</label>
            </div>
            <div className={`flex min-w-[276px] cursor-pointer min-h-[36px] border-[2px] border-[#B8BFEA] justify-start items-center bg-[#FEFEFE] border-l-[0px] border-t-[0px] ${activeTab === "tab-5" && '!bg-[#001489]'}`} onClick={() => setActiveTab("tab-5")}>
            {activeTab === "tab-5" ? (
            <img src={DetailActiveIcon} className="ml-2 "/>):( <img src={DetailIcon} className="ml-2 "/>)}
           
              <label className={`font-['Quicksand'] cursor-pointer ml-2 !text-[#001489] text-[16px] font-bold ${activeTab === "tab-5" && '!text-[#FEFEFE]'}`}>Detailed Carbon</label>
            </div>
            <div className={`flex min-w-[276px] cursor-pointer min-h-[36px] border-[2px] border-[#B8BFEA] justify-start items-center bg-[#FEFEFE] border-l-[0px] border-t-[0px] rounded-br-[4px]  ${activeTab === "tab-6" && '!bg-[#001489]'}`} onClick={() => setActiveTab("tab-6")}>
            {activeTab === "tab-6" ? (
            <img src={CarbonActiveIcon} className="ml-2 "/>):( <img src={CarbonIcon} className="ml-2 "/>)}
            
              <label className={`font-['Quicksand'] ml-2 !text-[#001489] text-[16px] cursor-pointer font-bold ${activeTab === "tab-6" && '!text-[#FEFEFE]'}`}>Carbon Offsetting</label>
            </div>
          </div>
          <div>
            {renderContent()}
          </div>
        </div>
        <div className="w-full h-[800px]">
          <div className="ml-[25px]">
            <Summary carPetrol={carPetrol} carAverage={carAverage} carDiesel={carDiesel} carHybrid={carHybrid} carPetrolEmployee={carPetrolEmployee} carAverageEmployee={carAverageEmployee} carDieselEmployee={carDieselEmployee} carHybridEmployee={carHybridEmployee}/>
          </div>
        </div>
      </Layout>
    </Layout>
  );
}

export default App;

interface MasterInputInformation {
  type: string | null;
  num1: number | null;
  unit: string | null;
  num2: number | null;
  driver: string;
  registrationNumber: string;
  checked: boolean;
}
interface MasterInputInformationEmployee {
  type: string | null;
  num1: number | null;
  unit: string | null;
  num2: number | null;
  driver: string;
  registrationNumber: string;
 
}

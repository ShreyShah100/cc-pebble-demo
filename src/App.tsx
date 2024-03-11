import { Layout } from "antd";
import React from "react";
import StaticHeader from "./components/StaticHeader";
import CustomForm from "./components/CustomForm";
import Summary from "./components/Summary";

const App: React.FC = () => {

  const [activeTab, setActiveTab] = React.useState<string>("tab-3");
  const [carPetrol, setCarPetrol] = React.useState<MasterInputInformation[]>([]);
  const [carDiesel, setCarDiesel] = React.useState<MasterInputInformation[]>([]);
  const [carAverage, setCarAverage] = React.useState<MasterInputInformation[]>([]);
  const [carHybrid, setCarHybrid] = React.useState<MasterInputInformation[]>([]);

  const renderContent = () => {
    switch (activeTab) {
      case "tab-1":
        return <label className={`font-['Quicksand'] !text-[#001489] text-[16px] font-bold`}>Company Information</label>
      case "tab-2":
        return <label className={`font-['Quicksand'] !text-[#001489] text-[16px] font-bold`}>Employee Travel</label>
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
        return <label className={`font-['Quicksand'] !text-[#001489] text-[16px] font-bold`}>Energy Consumption</label>
      case "tab-5":
        return <label className={`font-['Quicksand'] !text-[#001489] text-[16px] font-bold`}>Detailed Carbon</label>
      case "tab-6":
        return <label className={`font-['Quicksand'] !text-[#001489] text-[16px] font-bold`}>Carbon Offsetting</label>
    }
  }
  return (
    <Layout className="max-w-[1100px] m-auto bg-transparent mt-2 mb-2">
      <StaticHeader />
      <Layout className="bg-transparent flex flex-row">
        <div className="w-full max-width-[890px]">
          <div className="flex flex-row">
            <div className={`flex min-w-[276px] cursor-pointer min-h-[36px] border-[2px] border-[#B8BFEA] justify-center items-center bg-[#FEFEFE] rounded-tl-[4px] ${activeTab === "tab-1" && '!bg-[#001489]'}`} onClick={() => setActiveTab("tab-1")}>
              <label className={`font-['Quicksand'] !text-[#001489] text-[16px] font-bold ${activeTab === "tab-1" && '!text-[#FEFEFE]'}`}>Company Information</label>
            </div>
            <div className={`flex min-w-[276px] cursor-pointer min-h-[36px] border-[2px] border-[#B8BFEA] justify-center items-center bg-[#FEFEFE] border-l-[0px] ${activeTab === "tab-2" && '!bg-[#001489]'}`} onClick={() => setActiveTab("tab-2")}>
              <label className={`font-['Quicksand'] !text-[#001489] text-[16px] font-bold ${activeTab === "tab-2" && '!text-[#FEFEFE]'}`}>Employee Travel</label>
            </div>
            <div className={`flex min-w-[276px] cursor-pointer min-h-[36px] border-[2px] border-[#B8BFEA] justify-center items-center bg-[#FEFEFE] border-l-[0px] rounded-tr-[4px] ${activeTab === "tab-3" && '!bg-[#001489]'}`} onClick={() => setActiveTab("tab-3")}>
              <label className={`font-['Quicksand'] !text-[#001489] text-[16px] font-bold ${activeTab === "tab-3" && '!text-[#FEFEFE]'}`}>Business Travel</label>
            </div>
          </div>
          <div className="flex flex-row">
            <div className={`flex min-w-[276px] cursor-pointer min-h-[36px] border-[2px] border-[#B8BFEA] justify-center items-center bg-[#FEFEFE] border-t-[0px] rounded-bl-[4px] ${activeTab === "tab-4" && '!bg-[#001489]'}`} onClick={() => setActiveTab("tab-4")}>
              <label className={`font-['Quicksand'] !text-[#001489] text-[16px] font-bold ${activeTab === "tab-4" && '!text-[#FEFEFE]'}`}>Energy Consumption</label>
            </div>
            <div className={`flex min-w-[276px] cursor-pointer min-h-[36px] border-[2px] border-[#B8BFEA] justify-center items-center bg-[#FEFEFE] border-l-[0px] border-t-[0px] ${activeTab === "tab-5" && '!bg-[#001489]'}`} onClick={() => setActiveTab("tab-5")}>
              <label className={`font-['Quicksand'] !text-[#001489] text-[16px] font-bold ${activeTab === "tab-5" && '!text-[#FEFEFE]'}`}>Detailed Carbon</label>
            </div>
            <div className={`flex min-w-[276px] cursor-pointer min-h-[36px] border-[2px] border-[#B8BFEA] justify-center items-center bg-[#FEFEFE] border-l-[0px] border-t-[0px] rounded-br-[4px]  ${activeTab === "tab-6" && '!bg-[#001489]'}`} onClick={() => setActiveTab("tab-6")}>
              <label className={`font-['Quicksand'] !text-[#001489] text-[16px] font-bold ${activeTab === "tab-6" && '!text-[#FEFEFE]'}`}>Carbon Offsetting</label>
            </div>
          </div>
          <div>
            {renderContent()}
          </div>
        </div>
        <div className="w-full h-[800px]">
          <div className="ml-[25px]">
            <Summary carPetrol={carPetrol} carAverage={carAverage} carDiesel={carDiesel} carHybrid={carHybrid} />
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
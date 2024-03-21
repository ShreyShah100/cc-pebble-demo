import { Tabs,Layout,Typography,Input} from "antd";
import BusinnesIcon from '../assets/company facilities.svg';
import ElecticityIcon from '../assets/electricity.svg';
import WorkFromHomeIcon from '../assets/Work from home.svg';
import TowerSignalIcon from '../assets/tower signal.svg';
import SolarPanelIcon from '../assets/solar panel.svg';
import wildmileIcon from '../assets/windmill.svg';
import housePlugIcon from '../assets/Plug Home.svg';
import plugIcon from '../assets/Plug.svg';
import greenIcon from '../assets/net zero planning 64 x 64.svg';

const onChange = (key: string) => {
    console.log(key);
  };
  
function renderBusinessFacilityTab(){
  return (
    <div className="p-[15px]">
      <div className="flex flex-row">
          <img src={ElecticityIcon}/>
          <Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[20px] !mb-0 ml-2 !text-[#001489] ">Electricity (1250)</Typography.Title>
      </div>
      <table className="mt-4">
        <tbody>
            <tr >
              <td>
                <Input  className="custom-select w-[158px] h-[36px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] ml-1 mr-3 mb-5" placeholder="Meter name" />
              </td>
              <td>
                <Input  className="custom-select w-[138px] h-[36px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] mr-3 mb-5" placeholder="Meter number" />
              </td>
              <td>
                <Input  className="custom-select w-[100px] h-[36px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] mr-3 mb-5" placeholder="1000" />
              </td>
              <td>
                <Input  className="custom-select w-[104px] h-[36px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] mr-3 mb-5" placeholder="Cost/unit" />
              </td>
             <td>
              <div className="custom-energyIcon border-[1px] border-[#B8BFEA] w-[36px] h-[36px] mb-5 rounded-[4px] flex justify-center items-center cursor-pointer">
                        <img src={TowerSignalIcon} /></div>
              </td>
            </tr>
            <tr >
              <td>
                <Input  className="custom-select w-[158px] h-[36px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] ml-1 mr-3" placeholder="Meter name" />
              </td>
              <td>
                <Input  className="custom-select w-[138px] h-[36px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] mr-3" placeholder="Meter number" />
              </td>
              <td>
                <Input  className="custom-select w-[100px] h-[36px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] mr-3" placeholder="1000" />
              </td>
              <td>
                <Input  className="custom-select w-[104px] h-[36px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] mr-3" placeholder="Cost/unit" />
              </td>
              
              <td>
              <div className="custom-energyIcon border-[1px] border-[#B8BFEA] w-[36px] h-[36px] rounded-[4px] flex justify-center items-center cursor-pointer">
                        <img src={TowerSignalIcon} /></div>
              </td>
            </tr>
        </tbody>
      </table>
      <div className="h-[1px] w-full border-[1px] border-[#B8BFEA] mt-5 mb-4"></div>
      <div className="flex flex-row">
          <img src={greenIcon}/>
          <Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[20px] !mb-0 ml-2 !text-[#001489] ">Green Electricity (1250)</Typography.Title>
      </div>
      <table className="mt-4">
        <tbody>
            <tr >
              <td>
                <Input  className="custom-select w-[158px] h-[36px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] ml-1 mr-3 mb-5" placeholder="Meter name" />
              </td>
              <td>
                <Input  className="custom-select w-[138px] h-[36px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] mr-3 mb-5" placeholder="Meter number" />
              </td>
              <td>
                <Input  className="custom-select w-[100px] h-[36px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] mr-3 mb-5" placeholder="1000" />
              </td>
              <td>
                <Input  className="custom-select w-[104px] h-[36px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] mr-3 mb-5" placeholder="Cost/unit" />
              </td>
              <td>
              <div className="border-[1px] border-[#B8BFEA] w-[36px] h-[36px] mb-5 rounded-[4px] flex justify-center items-center cursor-pointer custom-energyIcon">
                        <img src={TowerSignalIcon} /></div>
              </td>
              <td>
              <div className="border-[1px] border-[#B8BFEA] w-[36px] h-[36px]  mb-5 rounded-[4px] flex justify-center items-center cursor-pointer custom-energyIcon">
                        <img src={SolarPanelIcon} /></div>
              </td>
              <td>
              <div className="border-[1px] border-[#B8BFEA] w-[36px] h-[36px] mb-5 rounded-[4px] flex justify-center items-center cursor-pointer custom-energyIcon">
                        <img src={wildmileIcon} /></div>
              </td>
              <td>
              <div className="border-[1px] border-[#B8BFEA] w-[36px] h-[36px] mb-5 rounded-[4px] flex justify-center items-center cursor-pointer custom-energyIcon">
                        <img src={housePlugIcon} /></div>
              </td>
              <td>
              <div className="border-[1px] border-[#B8BFEA] w-[36px] h-[36px] mb-5 rounded-[4px] flex justify-center items-center cursor-pointer custom-energyIcon">
                        <img src={plugIcon} /></div>
              </td>
            </tr>
            <tr >
              <td>
                <Input  className="custom-select w-[158px] h-[36px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] ml-1 mr-3" placeholder="Meter name" />
              </td>
              <td>
                <Input  className="custom-select w-[138px] h-[36px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] mr-3" placeholder="Meter number" />
              </td>
              <td>
                <Input  className="custom-select w-[100px] h-[36px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] mr-3" placeholder="1000" />
              </td>
              <td>
                <Input  className="custom-select w-[104px] h-[36px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] mr-3" placeholder="Cost/unit" />
              </td>
              
              <td>
              <div className="custom-energyIcon border-[1px] border-[#B8BFEA] w-[36px] h-[36px] rounded-[4px] flex justify-center items-center cursor-pointer">
                        <img src={TowerSignalIcon} /></div>
              </td>
              <td>
              <div className="custom-energyIcon border-[1px] border-[#B8BFEA] w-[36px] h-[36px] rounded-[4px] flex justify-center items-center cursor-pointer">
                        <img src={SolarPanelIcon} /></div>
              </td>
              <td>
              <div className="custom-energyIcon border-[1px] border-[#B8BFEA] w-[36px] h-[36px] rounded-[4px] flex justify-center items-center cursor-pointer">
                        <img src={wildmileIcon} /></div>
              </td>
              <td>
              <div className="custom-energyIcon border-[1px] border-[#B8BFEA] w-[36px] h-[36px] rounded-[4px] flex justify-center items-center cursor-pointer">
                        <img src={housePlugIcon} /></div>
              </td>
              <td>
              <div className="custom-energyIcon border-[1px] border-[#B8BFEA] w-[36px] h-[36px] rounded-[4px] flex justify-center items-center cursor-pointer">
                        <img src={plugIcon} /></div>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  )

}

  const EnergyConsuption: React.FC = () => (
    
    <Layout className="fixed-box w-full h-full min-w-[829px] max-w-[830px] max-h-[471px] overflow-y-scroll min-h-[471px] mt-5 bg-[#FEFEFE] rounded-[4px] shadow-[0px_0px_4px_0px_#00000040]">

      <Tabs
            onChange={onChange}
            type="card">
            {/* Each TabPane with custom tab style */}
            <Tabs.TabPane tab={<span className="custom-tab">
              <div className="flex flex-row">
                  <img src={BusinnesIcon}/>
                  <Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[20px] !mb-0 ml-1 !text-[#001489] ">Business Facility Energy </Typography.Title>
              </div>
            </span>} key="1">
                {renderBusinessFacilityTab()}
            </Tabs.TabPane>
            <Tabs.TabPane tab={<span className="custom-tab">
                <div className="flex flex-row">
                  <img src={WorkFromHomeIcon}/>
                  <Typography.Title level={5} className="font-['Quicksand'] !text-[20px] font-bold !mb-0 ml-1  !text-[#001489] "> Work from Home Energy </Typography.Title>
                </div>
              </span>} key="2">
              {renderBusinessFacilityTab()}
            </Tabs.TabPane>
          </Tabs>
    </Layout>
  );
  
  export default EnergyConsuption;
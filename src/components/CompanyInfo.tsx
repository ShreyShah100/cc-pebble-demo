import { Layout, Typography, Input,Button} from "antd";
import AddIcon from "../assets/Add Icon.svg";
import DataManagmentIcon  from "../assets/Data Managementturnover.svg";
import officeSpaceIcon from "../assets/office space.svg";
import productionSpaceIcon from "../assets/production space.svg";
import UploadIcon from "../assets/Vector (Stroke).svg";
import DeleteIcon from "../assets/Vector (Stroke) (1).svg";
import viewIcon from "../assets/view.svg";
import CusotmIcon from "../assets/custom.svg";

function CompanyInfo (){
    return (
        <Layout className="fixed-box w-full h-full min-w-[829px] max-w-[830px] max-h-[471px] overflow-y-scroll p-[15px] min-h-[471px] mt-5 bg-[#FEFEFE] rounded-[4px] shadow-[0px_0px_4px_0px_#00000040]">
          
               <table className="border-separate border-spacing-4">
       <tbody>
            <tr >
              
            <td>
                <div className="flex flex-row "><img src={DataManagmentIcon} className="w-[24px] h-[24px]"/><Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[20px] !mt-0 !mb-0 ml-2">Turnover</Typography.Title></div></td>
            <td><Input  className="custom-select w-[186px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="2100000" /></td>
            <td><div className="flex flex-row "><img src={DataManagmentIcon} className="w-[24px] h-[24px]"/><Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0 !mb-0 ml-2">Employees</Typography.Title></div></td>
            <td> <Input  className="custom-select w-[186px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="2100000" /></td>
            </tr>
            <tr >
            <td><div className="flex flex-row "><img src={officeSpaceIcon} className="w-[24px] h-[24px]"/><Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0 !mb-0 ml-2">Office Space</Typography.Title></div></td>
            <td><Input  className="custom-select w-[186px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="2100000" /></td>
            <td><div className="flex flex-row "><img src={DataManagmentIcon} className="w-[24px] h-[24px]"/><Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0 !mb-0 ml-2">Puplis</Typography.Title></div></td>
            <td> <Input  className="custom-select w-[186px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="2100000" /></td>
            
            </tr>
            <tr >
            <td><div className="flex flex-row "><img src={productionSpaceIcon} className="w-[24px] h-[24px]"/><Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0  !mb-0 ml-2 text-nowrap">Production Space</Typography.Title></div></td>
            <td><Input  className="custom-select w-[186px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="2100000" /></td>
            
            </tr>
            </tbody>
        </table>
        <table className="border-separate border-spacing-4">
            <tbody>
            <tr className="space-y-4">
            <td>
                <div className="flex flex-row ">
                    <img src={CusotmIcon} className="w-[24px] h-[24px]"/>
                    <Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0 !mb-0 ml-2">Custom 1</Typography.Title>
                </div>
            </td>
            <td><Input  className="custom-select w-[139px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="2100000" /></td>
            <td> <Input  className="custom-select w-[139px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="2100000" /></td>
            <td><div className="flex flex-row w-[139px] h-[36px] cursor-pointer border-[1px] border-[#B8BFEA] rounded-[4px] justify-center items-center">
                <img src={UploadIcon} className="w-[18px] h-[19px]"/>
                <Typography.Title className="font-['Quicksand'] font-bold !text-[#363A4F] !text-[14px] !mb-0 ml-2">Upload Icon</Typography.Title></div></td>
            <td><img src={viewIcon} className="w-[24px] h-[24px] cursor-pointer"/></td>
            <td><img src={DeleteIcon} className="w-[18px] h-[20px] cursor-pointer"/></td>
            </tr>
            <tr className="space-y-4">
            <td><div className="flex flex-row "><img src={CusotmIcon} className="w-[24px] h-[24px]"/><Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0 !mb-0 ml-2">Custom 2</Typography.Title></div></td>
            <td><Input  className="custom-select w-[139px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="2100000" /></td>
            <td> <Input  className="custom-select w-[139px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="2100000" /></td>
            <td><div className="flex flex-row w-[139px] h-[36px] cursor-pointer border-[1px] border-[#B8BFEA] rounded-[4px] justify-center items-center">
                <img src={UploadIcon} className="w-[18px] h-[19px]"/>
                <Typography.Title className="font-['Quicksand'] font-bold !text-[#363A4F] !text-[14px] !mb-0 ml-2">Upload Icon</Typography.Title></div></td>
            <td><img src={viewIcon} className="w-[24px] h-[24px] cursor-pointer"/></td>
            <td><img src={DeleteIcon} className="w-[18px] h-[20px] cursor-pointer"/></td>
            </tr>
            <tr >
            <td><div className="flex flex-row w-[186px]"><img src={CusotmIcon} className="w-[24px] h-[24px]"/><Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0 !mb-0 ml-2">Custom 3</Typography.Title></div></td>
            <td><Input  className="custom-select w-[139px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="2100000" /></td>
            <td> <Input  className="custom-select w-[139px] h-[36px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="2100000" /></td>
            <td>
                <div className="flex flex-row w-[139px] h-[36px] cursor-pointer border-[1px] border-[#B8BFEA] rounded-[4px] justify-center items-center">
                    <img src={UploadIcon} className="w-[18px] h-[19px]"/>
                    <Typography.Title className="font-['Quicksand'] font-bold !text-[#363A4F] !text-[14px] !mb-0 ml-2">Upload Icon</Typography.Title></div></td>
            <td><img src={viewIcon} className="w-[24px] h-[24px] cursor-pointer"/></td>
            <td><img src={DeleteIcon} className="w-[18px] h-[20px] cursor-pointer"/></td>
            </tr>
            </tbody>
            </table>
    
            <div className="flex flex-row mt-10 items-center">
                <div className="flex flex-row items-center bg-[#001489] rounded-[4px] p-[5px] cursor-pointer">
                    <img src={AddIcon} />
                    <Typography.Title className="font-['Quicksand'] font-bold !text-[#ffffff] !text-[16px] !mb-0 ml-1 p-1" >Add Custom Metric</Typography.Title>
                </div>
                <Typography.Title className=" ml-3 mb-0  text-nowrapfont-['Quicksand']  !text-[#363A4F] !text-[12px] font-medium">Max file size:2MB, Supported file types:JPG or PNG & Dimention 52px X 52px </Typography.Title>
            </div>
        </Layout>
       
    );
}

export default CompanyInfo;


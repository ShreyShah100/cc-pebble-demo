import { Layout, Typography, Input,Button} from "antd";

import AddIconColor from '../assets/Add Icon.svg';
import volumIcon from '../assets/volume.svg';
import schemeIcon from '../assets/scheme.svg';


function CarbonOffset (){
    return (
        <Layout className="fixed-box w-full h-full min-w-[829px] max-w-[830px] max-h-[471px] overflow-y-scroll p-[15px] min-h-[471px] mt-5 bg-[#FEFEFE] rounded-[4px] shadow-[0px_0px_4px_0px_#00000040]">
          
            <div className="flex flex-col mt-5 pl-2">
                <div className="flex flex-row mb-5">
                    <img src={volumIcon} className="w-[24px] h-[24px]"></img>
                    <Typography.Title level={5} className="w-[175px] font-['Quicksand'] font-bold !text-[#001489] !text-[20px] !mt-0 !mb-0 ml-2">Volume</Typography.Title>
                    
                </div> 
                <div className="flex flex-row mb-5">
                    <img src={schemeIcon} className="w-[24px] h-[24px]"></img>
                    <Typography.Title level={5} className=" w-[175px] font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0 !mb-0 ml-2">Schemes</Typography.Title>
                </div> 
                <div className="flex">
               <table>
                 
                <tbody>
                    <tr>
                        <td><Typography.Title  className=" w-[175px] font-['Quicksand']  !text-[#001489] !text-[14px] !mt-0 !mb-0">Scheme Name</Typography.Title></td>
                        <td><Typography.Title  className=" w-[175px] font-['Quicksand']  !text-[#001489] !text-[14px] !mt-0 !mb-0">Description</Typography.Title></td>
                        <td><Typography.Title  className=" w-[175px] font-['Quicksand']  !text-[#001489] !text-[14px] !mt-0 !mb-0">CO2e</Typography.Title></td>
                    </tr>
                    <tr>
                    <td><Typography.Title  className=" w-[175px] h-[73px] font-['Quicksand']  font-bold  border-[1px] bg-[#8A9FFE] !text-[#ffffff] border-[#363A4F]  rounded-[5px] !text-[#001489] !text-[14px] !mt-0 !mb-0">Self Certified Offsetting Scheme</Typography.Title></td>
                    </tr>
                </tbody>
               </table>
               </div>
                <div className="flex flex-row w-[87px] bg-[#001489] rounded-[4px] p-[5px] self-start justify-center cursor-pointer">
                    <img src={AddIconColor}></img>
                    <Typography.Title className="my-auto font-['Quicksand'] font-bold !text-[#ffffff] !text-[16px] !mt-1 !mb-0 ">Add</Typography.Title>
                </div>
               
                  
            </div>    
        
         
             
            <div className="flex flex-col">
               
             
                
            </div>
        </Layout>
       
    );
}

export default CarbonOffset;


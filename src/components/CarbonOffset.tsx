import { Layout, Typography, Input,Button,Radio} from "antd";
import type { RadioChangeEvent } from 'antd';
import  { useState } from 'react';
import AddIconColor from '../assets/Add Icon.svg';
import volumIcon from '../assets/volume.svg';
import schemeIcon from '../assets/scheme.svg';

const {TextArea} =Input;
function CarbonOffset (){

    const [value, setValue] = useState(1);
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };
    
    return (
        <div>
        <Layout className="fixed-box w-full h-full min-w-[829px] max-w-[830px] max-h-[435px] overflow-y-scroll p-[15px] min-h-[435px] mt-5 bg-[#FEFEFE] rounded-t-[4px] shadow-[0px_0px_4px_0px_#00000040]">
          
            <div className="flex flex-col mt-5 pl-2">
                <div className="flex flex-row mb-5">
                    <img src={volumIcon} className="w-[24px] h-[24px]"></img>
                    <Typography.Title level={5} className="w-[175px] font-['Quicksand'] font-bold !text-[#001489] !text-[20px] !mt-0 !mb-0 ml-2">Volume</Typography.Title>
                    <Radio.Group onChange={onChange} value={value}  className="self-center ">
                        <Radio value={1} className="custom-radio">Kg</Radio>
                        <Radio value={2}>Tonnes</Radio>
                    </Radio.Group>
                </div> 
                <div className="flex flex-row mb-5">
                    <img src={schemeIcon} className="w-[24px] h-[24px]"></img>
                    <Typography.Title level={5} className=" w-[175px] font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0 !mb-0 ml-2">Schemes</Typography.Title>
                </div> 
                <div className="flex">
               <table>
                 
                <tbody>
                    <tr>
                        <td><Typography.Title  className=" w-[175px] font-['Quicksand']  !text-[#001489] !text-[14px] !mt-0 ">Scheme Name</Typography.Title></td>
                        <td><Typography.Title  className=" w-[175px] font-['Quicksand']  !text-[#001489] !text-[14px] !mt-0 ">Description</Typography.Title></td>
                        <td><Typography.Title  className=" w-[175px] font-['Quicksand']  !text-[#001489] !text-[14px] !mt-0 ">CO<sub>2</sub>e</Typography.Title></td>
                    </tr>
                    <tr>
                    <td>
                        <div className="flex flex-col w-[194px] h-[73px]  border-[1px] bg-[#8A9FFE]  border-[#363A4F]  rounded-[5px]  !mt-0 !mb-0 mr-3 justify-center items-center">
                            <Typography.Title  className=" font-['Quicksand'] w-[147px] font-bold !text-[#001489] !text-[14px] !text-[#ffffff] ">Self Certified Offsetting Scheme</Typography.Title>
                        </div>
                    </td>
                    <td>
                    <TextArea  className="custom-select w-[347px] h-[74px] !max-h-[74px] !min-h-[74px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] p-[5px] mr-3" placeholder="Description xxxDescription xxxDescription xxxDescription xxxDescription xxxDescription " />
                    </td>
                    <td>
                    <TextArea  className="custom-select w-[170px] h-[74px] !max-h-[74px] !min-h-[74px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] p-[5px] text-center" placeholder="123,23,000" />
                    </td>
                    </tr>
                    <tr>
                        <td><Typography.Title  className="w-[175px] font-['Quicksand']  !text-[#001489] !text-[14px] mt-5 ">Scheme Name</Typography.Title></td>
                        <td><Typography.Title  className=" w-[175px] font-['Quicksand']  !text-[#001489] !text-[14px] mt-5 ">Description</Typography.Title></td>
                        <td><Typography.Title  className="w-[175px] font-['Quicksand']  !text-[#001489] !text-[14px] mt-5 ">CO<sub>2</sub>e</Typography.Title></td>
                    </tr>
                    <tr>
                    <td>
                        <div className="flex flex-col w-[194px] h-[73px]  border-[1px] bg-[#8A9FFE]  border-[#363A4F]  rounded-[5px]  !mt-0 !mb-0 justify-center items-center">
                            <Typography.Title  className=" font-['Quicksand'] w-[147px]  font-bold !text-[#001489] !text-[14px] !text-[#ffffff] ">Certified Offsetting Scheme</Typography.Title>
                        </div>
                    </td>
                    <td>
                    <TextArea  className="custom-select w-[347px] h-[74px] !max-h-[74px] !min-h-[74px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] p-[5px]" placeholder="Description xxxDescription xxxDescription xxxDescription xxxDescription xxxDescription " />
                    </td>
                    <td>
                    <TextArea  className="custom-select w-[170px] h-[74px] !max-h-[74px] !min-h-[74px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px] p-[5px] text-center" placeholder="123,23,000" />
                    </td>
                    </tr>
                    
                </tbody>
               </table>
               </div>
                <div className="flex flex-row w-[87px] h-[36px] bg-[#001489] rounded-[4px] p-[5px] self-start justify-center cursor-pointer mt-5">
                    <img src={AddIconColor}></img>
                    <Typography.Title className="my-auto font-['Quicksand'] ml-1 font-bold !text-[#ffffff] !text-[16px] !mt-1 !mb-0 ">Add</Typography.Title>
                </div>
               
                  
            </div>    
        
         
             
            <div className="flex flex-col ">
               
             
                
            </div>
        </Layout>
        <div className="flex flex-row bg-[#FEFEFE] shadow-[0px_0px_4px_0px_#00000040] p-[15px] justify-between rounded-b-[4px] ">
        <Typography.Title className="my-auto font-['Quicksand'] ml-1 font-bold !text-[#001489] !text-[20px] !mt-1 !mb-0 ">Total Offsetting</Typography.Title>
        <Typography.Title className="my-auto font-['Quicksand'] ml-1 font-bold !text-[#363A4F] !text-[20px] !mt-1 !mb-0 ">123,23,000 CO<sub>2</sub>e</Typography.Title>
        </div>
        </div>
    );
}

export default CarbonOffset;


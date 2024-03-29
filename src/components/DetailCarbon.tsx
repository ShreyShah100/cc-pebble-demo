import { Layout, Typography, Input,Checkbox,Select} from "antd";
import AddIcon from "../assets/Add.svg";
import AddIconColor from '../assets/Add Icon.svg';
import CarbonfootPrint  from "../assets/carbon footprint.svg";
import WaterSupplyIcon from "../assets/water supply.svg";
import WaterTreatmentIcon from "../assets/water treatment.svg";
import MaterialIcon from "../assets/material use.svg";
import WaterDiposal from "../assets/waste disposal.svg";
import CustomIcon from "../assets/custom.svg";
import DropdownIcon from "../assets/dropdown.svg";


function DetailCarbon (){
    return (
        <Layout className="fixed-box w-full h-full min-w-[829px] max-w-[830px] max-h-[471px] overflow-y-scroll p-[15px] min-h-[471px] mt-5 bg-[#FEFEFE] rounded-[4px] shadow-[0px_0px_4px_0px_#00000040]">
          
            <div className="flex flex-col mt-5 pl-2">
                <div className="flex flex-row mb-5">
                    <img src={CarbonfootPrint} className="w-[24px] h-[24px]"/>
                    <Typography.Title level={5} className="w-[175px] font-['Quicksand'] font-bold !text-[#001489] !text-[20px] !mt-0 !mb-0 ml-2">Direct Carbon</Typography.Title>
                    <Input  className="custom-select w-[164px] h-[36px] bg-[#FEFEFE] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="XXXXKg" />
                </div> 
                <div className="flex flex-row mb-5">
                    <img src={WaterSupplyIcon} className="w-[24px] h-[24px]"/>
                    <Typography.Title level={5} className=" w-[175px] font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0 !mb-0 ml-2">Water Supply</Typography.Title>
                    <Input  className="custom-select bg-[#FEFEFE] w-[164px] h-[36px]  border-[1px] border-[#363A4F] rounded-[4px]" placeholder="m3" />
                    <Input  className="custom-select bg-[#FEFEFE] w-[206px] h-[36px] ml-[15px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="Cost/Unit" />
                </div> 
                <div className="flex flex-row mb-5">
                    <img src={WaterTreatmentIcon} className="w-[24px] h-[24px]"/>
                    <Typography.Title level={5} className="w-[175px] font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0 !mb-0 ml-2">Water Treatment</Typography.Title>
                    <Input  className="custom-select bg-[#FEFEFE] w-[164px] h-[36px]  border-[1px] border-[#363A4F] rounded-[4px]" placeholder="m3" />
                    <Input  className="custom-select bg-[#FEFEFE] w-[206px] h-[36px] ml-[15px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="Cost/Unit" />
                </div> 
                <div className="flex flex-row mb-5">
                <img src={MaterialIcon} className="w-[24px] h-[24px]"/>
                <Typography.Title level={5} className="w-[175px] font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0  !mb-0 ml-2 text-nowrap">Material Use</Typography.Title>
                <Select
                            style={{ width: 120 }}
                            suffixIcon={null}
                            placeholder={"Material Use"}
                            options={[
                                { value: 'miles', label: 'Miles' },
                                { value: 'km', label: 'Km' },
                                { value: 'ltr', label: 'Litres' },
                            ]}
                            className="custom-select bg-[#FEFEFE] h-[36px] border-[1px]  border-[#363A4F] rounded-[4px] min-w-[164px] max-w-[164px]"

                        />
                        
                        <Input  className="custom-select  bg-[#FEFEFE] w-[93px] h-[36px]  ml-[15px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="tonnes" />
                        <Select
                            style={{ width: 65, backgroundColor:"#FEFEFE" }}
                            suffixIcon={null}
                            placeholder={"Unit"}
                          options={[
                                { value: 'miles', label: 'Miles' },
                                { value: 'km', label: 'Km' },
                                { value: 'ltr', label: 'Litres' },
                            ]}
                            className="custom-select h-[36px] bg-[#FEFEFE] border-[1px]  ml-[15px] border-[#363A4F] rounded-[4px] min-w-[98px] max-w-[98px]"

                        />
                      
                        <Input  className="custom-select bg-[#FEFEFE] w-[93px] h-[36px] ml-[15px] border-[1px] border-[#363A4F] bg-[#FEFEFE] rounded-[4px]" placeholder="2100000" /> 
                        <div className="border-[1px] border-[#B8BFEA] w-[36px] h-[36px] ml-[15px] rounded-[4px] flex justify-center items-center cursor-pointer">
                        <img src={AddIcon} /></div>
                </div> 
                <div className="flex flex-row mb-5">
                <img src={WaterDiposal} className="w-[24px] h-[24px]"/>
                <Typography.Title level={5} className="w-[175px] font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0  !mb-0 ml-2 text-nowrap">Waste Disposal</Typography.Title>
                <Select
                            style={{ width: 120 }}
                            suffixIcon={null}
                            placeholder={"Material Use"}
                          options={[
                                { value: 'miles', label: 'Miles' },
                                { value: 'km', label: 'Km' },
                                { value: 'ltr', label: 'Litres' },
                            ]}
                            className="custom-select bg-[#FEFEFE] h-[36px] border-[1px]  border-[#363A4F] rounded-[4px] min-w-[164px] max-w-[164px]"

                        />
                       
                        <Input  className="custom-select bg-[#FEFEFE] w-[93px] h-[36px]  ml-[15px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="tonnes" />
                        <Select
                            style={{ width: 65}}
                            suffixIcon={null}
                            placeholder={"Unit"}
                          options={[
                                { value: 'miles', label: 'Miles' },
                                { value: 'km', label: 'Km' },
                                { value: 'ltr', label: 'Litres' },
                            ]}
                            className="custom-select bg-[#FEFEFE] h-[36px] border-[1px] ml-[15px] border-[#363A4F] rounded-[4px] min-w-[98px] max-w-[px]"

                        />
                       
                        <Input  className="custom-select bg-[#FEFEFE] w-[93px] h-[36px] ml-[15px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="2100000" /> 
                        <div className="border-[1px] border-[#B8BFEA] w-[36px] h-[36px] ml-[15px] rounded-[4px] flex justify-center items-center cursor-pointer">
                        <img src={AddIcon} /></div>
                </div> 
                  
            </div>    
        
            <div className="h-[1px] w-full border-[1px] border-[#B8BFEA] mt-5 mb-4"></div>
             
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <img src={CustomIcon} className="w-[24px] h-[24px]"/>
                    <Typography.Title level={5} className="w-[175px] font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0  !mb-0 ml-2 text-nowrap">Customisable Projects</Typography.Title>
                </div>
                
                <Typography.Title level={5} className="w-[175px] font-['Quicksand'] font-thin !text-[#363A4F] !text-[12px] !mt-2  text-nowrap">No custom projects available for this site</Typography.Title>
                
                <table className="mt-5">
                    <tbody>
                        <tr>
                            <td>
                                <Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[16px] !mt-0  !mb-0  text-nowrap">Sub Category</Typography.Title>
                            </td>
                            <td>
                                <Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[16px] !mt-0  !mb-0  text-nowrap">Name</Typography.Title>
                            </td>
                            <td>
                                <Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[16px] !mt-0  !mb-0  text-nowrap">Unit</Typography.Title>
                            </td>
                            <td>
                                <Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[16px] !mt-0  !mb-0  text-nowrap">CO<sub>2</sub>e/Unit</Typography.Title>
                            </td>
                            <td>
                                <Typography.Title level={5} className=" font-['Quicksand'] font-bold !text-[#001489] !text-[16px] !mt-0  !mb-0  text-nowrap">Volume</Typography.Title>
                            </td>
                            <td>
                                <Typography.Title level={5} className="font-['Quicksand'] font-bold !text-[#001489] !text-[16   px] !mt-0  !mb-0  text-nowrap">Cost/Unit</Typography.Title>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex flex-row">
                                    <Select
                                    style={{ width: 100 }}
                                    suffixIcon={null}
                                    placeholder={"Sub category"}
                                    options={[
                                        { value: 'Machinery', label: 'Machinery' },
                                        { value: 'Tools', label: 'Tools' },
                                        { value: 'Ship', label: 'Ship' },
                                    ]}
                                    className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[140px] max-w-[140px]"/> 
                                    
                                </div>
                            </td>
                            <td>
                            <div className="flex flex-row">
                                    <Select
                                    style={{ width: 100 }}
                                    suffixIcon={null}
                                    placeholder={"Name"}
                                    options={[
                                        { value: 'Machinery', label: 'Machinery' },
                                        { value: 'Tools', label: 'Tools' },
                                        { value: 'Ship', label: 'Ship' },
                                    ]}
                                    className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px] min-w-[140px] max-w-[140px]"/> 
                                   
                                </div>
                            </td>
                            <td>
                            <div className="flex flex-row">
                                    <Select
                                    style={{ width: 65 }}
                                    suffixIcon={null}
                                    placeholder={"Unit"}
                                options={[
                                        { value: 'kg', label: 'kg' },
                                        { value: 'kg', label: 'kg' },
                                    
                                    ]}
                                    className="custom-select bg-[#FEFEFE] h-[36px] border-[1px]   border-[#363A4F] rounded-[4px] min-w-[98px] max-w-[98px]"/>
                                   
                                </div>
                            </td>
                            <td>
                                <Input  className="custom-select bg-[#FEFEFE] w-[93px] h-[36px]   border-[1px] border-[#363A4F] rounded-[4px]" placeholder="2" /> 
                            </td>
                            <td>
                                <Input  className="custom-select bg-[#FEFEFE] w-[93px] h-[36px]   border-[1px] border-[#363A4F] rounded-[4px]" placeholder="232" /> 
                            </td>
                            <td>
                                <Input  className="custom-select bg-[#FEFEFE] w-[93px] h-[36px]   border-[1px] border-[#363A4F] rounded-[4px]" placeholder="4" /> 
                            </td>

                            <td>
                                    <Checkbox/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <div className="flex flex-row w-[87px] bg-[#001489] rounded-[4px] p-[5px] mt-5 self-end justify-center cursor-pointer">
                    <img src={AddIconColor}/>
                    <Typography.Title className="my-auto font-['Quicksand'] font-bold !text-[#ffffff] !text-[16px] !mt-1 !mb-0 ">Add</Typography.Title>
                </div>
                
                {/* <div className="flex flex-col">
                    <div className="flex flex-row">
                        <Typography.Title level={5} className="w-[175px] font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0  !mb-0 ml-2 text-nowrap">Sub Category</Typography.Title>
                        <Typography.Title level={5} className="w-[175px] font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0  !mb-0 ml-2 text-nowrap">Unit</Typography.Title>
                        
                        <Typography.Title level={5} className="w-[175px] font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0  !mb-0 ml-2 text-nowrap">Volume</Typography.Title>
                        <Typography.Title level={5} className="w-[175px] font-['Quicksand'] font-bold !text-[#001489] !text-[18px] !mt-0  !mb-0 ml-2 text-nowrap">Cost/Unit</Typography.Title>
                    </div>
                    <div className="flex flex-row">
                    <Select
                            style={{ width: 140 }}
                            suffixIcon={null}
                            placeholder={"Sub category"}
                            options={[
                                { value: 'Machinery', label: 'Machinery' },
                                { value: 'Tools', label: 'Tools' },
                                { value: 'Ship', label: 'Ship' },
                            ]}
                            className="custom-select h-[36px] border-[1px] border-[#363A4F] rounded-[4px_0px_0px_4px] min-w-[131px] max-w-[131px]"/> 
                        <div className="flex justify-center items-center w-[33px] h-[36px] border-[1px] border-[#363A4F] border-l-[0px] rounded-[0px_4px_4px_0px]">
                            <img src={DropdownIcon} className="w-[12px] h-[6px]" />
                        </div>
                        <Select
                            style={{ width: 65 }}
                            suffixIcon={null}
                            placeholder={"Unit"}
                          options={[
                                { value: 'kg', label: 'kg' },
                                { value: 'kg', label: 'kg' },
                               
                            ]}
                            className="custom-select bg-[#FEFEFE] h-[36px] border-[1px]   border-[#363A4F] rounded-[4px] min-w-[65px] max-w-[65px]"

                        />
                       <Input  className="custom-select bg-[#FEFEFE] w-[93px] h-[36px]   border-[1px] border-[#363A4F] rounded-[4px]" placeholder="2100000" /> 
                       <Input  className="custom-select bg-[#FEFEFE] w-[93px] h-[36px]   border-[1px] border-[#363A4F] rounded-[4px]" placeholder="2100000" /> 
                       <Input  className="custom-select bg-[#FEFEFE] w-[93px] h-[36px] ml-[15px] border-[1px] border-[#363A4F] rounded-[4px]" placeholder="2100000" /> 
                    </div>

                </div> */}
            </div>
        </Layout>
       
    );
}

export default DetailCarbon;


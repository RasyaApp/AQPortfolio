import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="rasyaaditiyaputrapratama@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+62 878 6278 4132" Image={FiPhone} />
      <SingleInfo text="Malang, jatim" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;

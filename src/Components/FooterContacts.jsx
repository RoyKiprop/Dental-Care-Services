

function FooterContact({ Icon, text }) {
  return (
    <li className="flex items-center">
      <div className="p-2 rounded-full bg-[#d3e2cf] mr-2">
        <Icon className="text-gray-500" />
      </div>
      {text}
    </li>
  );
}

export default FooterContact;

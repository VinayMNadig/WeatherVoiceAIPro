function SectionTitle({ icon, title }) {

  return (

    <div className="flex items-center gap-4 mb-6">

      <span className="text-4xl">

        {icon}

      </span>

      <h2 className="text-3xl font-bold text-white">

        {title}

      </h2>

    </div>

  );

}

export default SectionTitle;
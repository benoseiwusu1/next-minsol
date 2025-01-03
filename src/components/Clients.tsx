import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ClientType = {
  title?: string;
  image: string;
};

const clients: ClientType[] = [
  {
    title: "Obuasi and Iduaprem (Ghana)",
    image: "c1.jpg",
  },
  {
    title: "Asanko Gold Mine (Ghana)",
    image: "c2.jpg",
  },
  {
    title: "Ayamfuri (Ghana), Sissingue (Cote D’Ivoire)",
    image: "c3.jpg",
  },
  {
    image: "c4.jpg",
  },
  {
    title: "Nsuta (Ghana)",
    image: "c5.png",
  },
  {
    title: "Tarkwa and Damang (Ghana)",
    image: "c6.jpg",
  },
  {
    title: "Tongon (Cote D’Ivoire)",
    image: "c7.png",
  },
  {
    title: "Loulo (Mali)",
    image: "c8.png",
  },
  {
    title: "Syama (Mali)",
    image: "c9.jpg",
  },
  {
    title: "Awaso (Ghana)",
    image: "c10.png",
  },
  {
    title: "Akyem and Ahafo (Ghana)",
    image: "c11.png",
  },
  {
    image: "c13.jpg",
  },
  {
    image: "c14.png",
  },
  {
    title: "Burkina Faso",
    image: "c15.png",
  },
  {
    title: "Mali",
    image: "c16.png",
  },
  {
    title: "Bibiani Mine (Ghana)",
    image: "c17.png",
  },
];

const Clients = () => {
  return (
    <TooltipProvider>
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 md:px-20">
          <h3 className="section-title text-center">Our Clients</h3>
          <div className="grid grid-cols-4 md:grid-cols-6 w-full items-center justify-center gap-x-6 mt-16">
            {clients.map((client, index) => (
              <div className="text-center" key={index}>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src={`/client/${client.image}`}
                      alt={client.title}
                      className="w-full"
                    />
                  </TooltipTrigger>
                  {client.title && (
                    <TooltipContent className="bg-main p-2">
                      <div className="border-none">
                        <p>{client.title}</p>
                      </div>
                    </TooltipContent>
                  )}
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Clients;

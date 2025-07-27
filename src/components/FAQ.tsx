import { Card } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is this AI tool actually created by Julian Brown?",
      answer: "Plastoline Julian is an AI assistant inspired by and modeled after Julian Brown's work and knowledge. It preserves and shares his methodologies for plastic-to-fuel conversion through pyrolysis technology. This is an educational tool designed to make his expertise accessible worldwide."
    },
    {
      question: "How safe is the plastic-to-fuel conversion process?",
      answer: "Safety is paramount. The AI provides comprehensive safety protocols including proper PPE, ventilation requirements, fire prevention, and explosion safety measures. However, this is experimental technology that carries inherent risks. All activities are undertaken at your own risk and require proper training and precautions."
    },
    {
      question: "What types of plastic can be converted to fuel?",
      answer: "The process works best with HDPE (High-Density Polyethylene), PP (Polypropylene), and PS (Polystyrene). PVC and other chlorinated plastics are dangerous and should never be used as they release toxic gases. The AI provides detailed guidance on plastic sorting and identification."
    },
    {
      question: "Can I really build a reactor from scrap materials?",
      answer: "Yes! Julian Brown's methodology focuses on DIY construction using readily available materials like old microwaves, steel drums, and basic welding equipment. The AI provides step-by-step instructions, material lists, and sourcing tips for building functional reactors on a budget."
    },
    {
      question: "What kind of fuel output can I expect?",
      answer: "Depending on the plastic type and reactor efficiency, you can produce gasoline, diesel, and jet fuel equivalents. Output varies by feedstock quality and reactor design. The AI teaches quality testing, storage, and proper use of the produced fuels."
    },
    {
      question: "Is this legal in my area?",
      answer: "Regulations vary by location. You must research and comply with local environmental, safety, and energy production laws. This tool is for educational purposes and doesn't constitute legal advice. Always consult local authorities before operating any fuel production equipment."
    },
    {
      question: "How much does it cost to build a basic reactor?",
      answer: "Basic reactors can be built for a few hundred to a few thousand dollars using scrap materials and DIY methods. Costs vary based on size, materials availability, and local prices. The AI provides budget-conscious alternatives and cost-saving tips."
    },
    {
      question: "What support is available for troubleshooting?",
      answer: "Plastoline Julian provides detailed troubleshooting guides for common issues like vapor leaks, heating inefficiencies, condensation problems, and electrical faults. The AI also connects you to Julian Brown's original video content and educational resources."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-neon-cyan">Frequently</span>{" "}
            <span className="text-neon-pink">Asked</span>{" "}
            <span className="text-foreground">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about Plastoline Julian and plastic-to-fuel conversion technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card/60 border-border">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-border/50 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left hover:text-neon-cyan transition-colors text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          {/* Additional Resources */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6 text-neon-purple">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-8">
              Our AI assistant is available 24/7 to provide detailed, step-by-step guidance 
              on all aspects of plastic-to-fuel conversion.
            </p>
            <a 
              href="https://chatgpt.com/g/g-68853f78b2988191a919e23f74d724b1-plastic-to-fuel-plastoline-julian-brown"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-neon-purple text-background px-8 py-4 rounded-lg font-bold hover:bg-neon-purple/80 shadow-[0_0_20px_hsl(var(--neon-purple)/0.6)] hover:shadow-[0_0_35px_hsl(var(--neon-purple)/0.9)] transition-all duration-300">
                Ask Plastoline Julian
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
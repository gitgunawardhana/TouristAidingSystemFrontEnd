import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./AccordianVehicle.css";

const AccordianVehicle = () => {
    return (
        <div id="Accordiandivtop">
            <h2 id="vehicleheading97">Frequently Asked Questions </h2>
            <Accordion id="contentAreaAcc">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography id="topicmy">Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
                        laboriosam soluta reprehenderit dolore et consequatur tenetur, ut
                        porro cumque, labore ab consectetur doloremque dolorem deleniti.
                        Eligendi non ut hic totam voluptas voluptates tempora dolor,
                        inventore veniam? Ab a tempore, nemo iste temporibus deleniti vel
                        provident praesentium fuga architecto eum illum, assumenda quibusdam
                        maiores omnis cupiditate est commodi ea, rerum necessitatibus culpa
                        ratione quo! Accusamus eveniet voluptate, quia provident iusto
                        quisquam! Aut, amet a? Et blanditiis obcaecati deserunt soluta
                        placeat fugit exercitationem quas. In molestiae, voluptates
                        necessitatibus eveniet corrupti officia incidunt iure nostrum ad
                        iste accusantium, tempora libero reprehenderit quasi porro?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion id="contentAreaAcc">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography id="topicmy">Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
                        recusandae tempore libero et accusamus deserunt nesciunt dolorem
                        dolorum accusantium iusto! Suscipit rerum dolore officiis provident
                        animi unde, sapiente omnis error neque cupiditate nobis atque natus
                        ad quod nesciunt tempore ea dolor dolorem quae dicta facere?
                        Recusandae, laboriosam a commodi quae cumque amet ad doloremque
                        possimus. Nisi nobis assumenda optio? Ad unde quibusdam deleniti
                        qui. Fugiat, ipsa vel. Dolorum iusto doloremque dolores deserunt
                        tempore. Nulla quo non fuga? Fugiat dicta, magni delectus rerum
                        consequatur est nulla, eaque mollitia magnam asperiores eos ipsum
                        in, harum aut quo! Nostrum quae natus dolor nihil!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion id="contentAreaAcc">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography id="topicmy">Disabled Accordion</Typography>
                </AccordionSummary>
            </Accordion>
        </div>
    );
};

export default AccordianVehicle;

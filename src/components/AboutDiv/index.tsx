import React from "react";
import { Container, Row } from "react-bootstrap";
import { AboutContainer, Title, Description } from "./styles.tsx";

const AboutDiv: React.FC = () => {
  return (
    <Container className="mt-5" id="AboutDiv">
      <Row>
        <AboutContainer>
          <Title>About our Work</Title>
          <Description>
            The <strong>Institute for Applied Economic Research (Ipea)</strong> is a federal public foundation
            linked to the Ministry of Economy. Since its creation in 1964, it has been dedicated to improving public
            policies essential to Brazilian development by producing and disseminating knowledge and advising the State
            in its strategic decisions.
            <p></p>
            This study aims to conduct an exploratory and in-depth analysis of national time series, focusing on
            exchange rates, using the robust <strong>IpeaData</strong> database — a platform that gathers economic,
            financial, demographic, geographic, and social datasets on various topics, such as income, education,
            health, housing, and employment. Ipea is responsible for collecting and providing high-quality
            macroeconomic and regional data. The choice of IpeaData is justified by its comprehensiveness,
            reliability, and accessibility, making it an essential source for economic research in Brazil. Moreover, the
            data provided are public and can be reproduced and used in tables, graphs, maps, and texts, as long as
            IpeaData is cited, including in bibliographic references.
            <p></p>
            The IpeaData database offers a wide range of time series, covering economic, social, and demographic
            indicators. The data are predominantly numerical, with high frequency (daily, monthly, and annual), and have
            detailed metadata that describe the variables, units of measurement, and collection periods. The data
            structure is organized in a tabular format, facilitating its manipulation and analysis.
            <p></p>
            To support our analysis, we opted to use a relational database. This choice is justified by the need to
            efficiently store and relate various time series, as well as to facilitate complex queries and integration
            with other data sources. We used an RDBMS to manage the database and ensure data integrity and consistency.
            Throughout the process of loading and transforming the data, we identified some peculiarities, such as
            missing values and discrepancies in some series. These issues were appropriately addressed in subsequent
            sessions of this study to ensure the quality of the analysis.
            <p></p>
            Given the vast amount of data available in IpeaData, it is worth noting that we chose to focus our analysis
            on exchange rates. This choice is justified by its importance concerning the Brazilian economy, influencing
            various aspects such as foreign trade, inflation, and foreign direct investment. The adopted strategy
            consists of conducting a detailed exploratory analysis of the exchange rate time series, identifying
            patterns, trends, and cycles. Then, we will use econometric models to model its evolution and make future
            projections.
            <p></p>
            For the analysis and data visualization, we use the <strong>Python programming language</strong>. The choice of Python
            is justified by its wide range of statistical and graphical packages, in addition to being an open-source
            and free tool with extensive references for use. Furthermore, a web interface will be developed using Python
            and integrated with the <strong>React</strong> front-end library, which allows the creation of web applications quickly
            and efficiently. The interactive platform will enable users to explore the analysis results visually and
            interactively, facilitating the understanding of results and decision-making.
            <p></p>
            To make this application accessible and continuously available, we deployed our React web application on
            the <strong>Netlify</strong> platform, which is accessible in this domain. This approach ensures that the application is easily accessible to interested parties, offering an
            intuitive and easy-to-use interface, which amplifies the reach and utility of the research results.
            <p></p>
            In this context, we can list the main benefits of using the Web Interface in enriching this study:
            <ul>
              <li>
                <strong>Interactive Visualization:</strong> Enables users to explore the data dynamically, filtering and
                customizing the graphs.
              </li>
              <li>
                <strong>Accessibility:</strong> Makes the analysis results accessible to a broader audience without the
                need for technical knowledge in statistics or programming.
              </li>
              <li>
                <strong>Sharing:</strong> Facilitates the communication of research results with other researchers and
                decision-makers.
              </li>
            </ul>
            Finally, it is essential to mention that the analysis of this study will not be limited to exchange rates
            but will also consider its correlation with other indicators, such as unemployment, inflation, and other
            possible analyses feasible with the data obtained.
          </Description>
        </AboutContainer>
      </Row>
    </Container>
  );
};

export default AboutDiv;

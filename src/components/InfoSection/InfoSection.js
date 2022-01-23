import React from 'react';
import { Container } from '../../globalStyles';
import { InfoSec, InfoRow, InfoColumn, TextWrapper } from './InfoSection.styles';

const InfoSection = ({ lightbg, imgStart  }) => {
  return (
        <>
            <InfoSec lightbg={lightbg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{ topLine }</TopLine>
                                <Heading lightText={lightText}>{ headLine }</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{ description }</Subtitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig primary={primary}>
                                        { buttonLabel }
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
  )
};

export default InfoSection;

import {useEffect, useState} from 'react';
import {randomcatApi} from 'shared/api';
import {Container, DataContainer, GenerateButton, ImageContainer} from 'shared/ui';
import {loadImage} from 'shared/lib';

const MainPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [catUrl, setCatUrl] = useState<string | undefined>();

    const getRandomCatUrl = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            randomcatApi.getRandomCat()
                .then(({data}) => resolve(data.file))
                .catch((e) => reject(e.message));
        });
    };

    const generateNewCatImage = () => {
        setIsLoading(true);
        getRandomCatUrl()
            .then(url => loadImage(url).then(() => setCatUrl(url)))
            .finally(() => setIsLoading(false));
    };
    useEffect(() => {
        generateNewCatImage();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <GenerateButton onClick={generateNewCatImage}>
                Generate
            </GenerateButton>

            <DataContainer>
                {(isLoading || !catUrl)
                    ? <p>Loading random cat...</p>
                    : <ImageContainer src={catUrl} alt="Cat url"/>
                }
            </DataContainer>
        </Container>
    );
};

export default MainPage;

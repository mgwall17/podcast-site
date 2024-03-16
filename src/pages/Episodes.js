"use client";
import { Link } from "@chakra-ui/next-js";
import { Container, Heading, Stack, Text, Box } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
export default function Episodes() {
  return (
    <Container>
        <Heading as="h1" size="xl" align={'center'} mb={4}>Episodes</Heading>
        <Stack spacing={8}>
          <Box>
          <MovieCard
          title="Episode 1: Psycho"
          image="psycho.jpg"
          dateReleased="1982"
          director="Alfred Hitchcock"
          summary="A secretary embezzles money and checks into a secluded motel run by the mysterious Norman Bates. The narrative takes a shocking turn with the infamous shower scene, leading to a psychological thriller that explores the depths of madness and the unsettling consequences of fractured identities."
          comingSoon={false}
          isPublished={true}
          publish_date={"September 4, 2023"}
          guest={"Steven delights us with little known facts and music score commentary and discusses the cultural impact this unique plot has on future cinema."}
          iframe={<iframe
          src="https://open.spotify.com/embed/show/2TTfdtQ83xCbaSlv1yVdTt?utm_source=generator" width="100%" height="152" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>}
        />
          </Box>
        <Heading align={"center"} as="h2" size="lg">Upcoming Episodes</Heading>
          <Box>
          <MovieCard
          title="Episode 2: The Thing"
          image="Thing.jpg"
          dateReleased="1982"
          director="John Carpenter"
          summary="A group of researchers in Antarctica discover an extraterrestrial organism that assimilates and imitates other life forms, creating an atmosphere of paranoia and fear as they struggle to determine who among them has been taken over by the shape-shifting entity. As trust erodes and survival becomes uncertain, the film unfolds as a suspenseful and chilling exploration of isolation and the terrifying unknown."
          comingSoon={true}
          premier_date={"December 2023"}
          guest={"George reveals how this movie changed his life, how incredible the effects stand the test of time and discusses one the most ambiguous endings in horror history."}
        />
          </Box>
        <Box>
          <MovieCard
          title="Episode 3: Hellraiser"
          image="Hellraiser.jpg"
          dateReleased="1987"
          director="Clive Barker"
          summary="A man unlocks a mysterious puzzle box, inadvertently summoning sadomasochistic creatures known as Cenobites. As the boundaries between pleasure and pain blur, he becomes entangled in a nightmarish dimension, confronting his own desires and the macabre consequences of meddling with forbidden forces."
          comingSoon={true}
          premier_date={"January 2024"}
          guest={"Mariah tells us about how Hellraiser awed her with practical effects, introduced her to body horror, and how it explores the limits of pleasure and pain with its characters."}
        />
          </Box>
          <Box>
          <MovieCard
          title="Episode 4: Halloween"
          image="Halloween.jpeg"
          dateReleased="1978"
          director="John Carpenter"
          summary="A masked killer named Michael Myers escapes from a mental institution and returns to his hometown on Halloween night. As he terrorizes babysitter Laurie Strode, the film unfolds as a suspenseful and iconic slasher, setting the standard for the genre and introducing audiences to the haunting figure of Michael Myers."
          comingSoon={true}
          premier_date={"February 2024"}
          guest={"Mario discusses this masterclass of Slasher and how Michael Myers continues to stalk his mind to this day."}
        />
          </Box>
          <Box>
          <MovieCard
          title="Episode 5: The Autopsy of Jane Doe"
          image="JaneDoe.jpg"
          dateReleased="2016"
          director="André Øvredal"
          summary="A father-son coroner duo receives an unidentified female corpse for examination. As they delve into the autopsy, they uncover increasingly disturbing and supernatural secrets, leading to a night of terror within the confines of their mortuary."
          comingSoon={true}
          premier_date={"March 2024"}
          guest={"Susan and Mike discuss with me how surprising this movie was for them and the unique set-up and excellent use of mystery they observed in this film."}
        />
          </Box>
        </Stack>
    </Container>
  );
}

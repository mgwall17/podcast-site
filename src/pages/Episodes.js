"use client";
import { Link } from "@chakra-ui/next-js";
import { Container, Heading, Stack, Text, Box } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
export default function Episodes() {
  return (
    <div>
      <Container>
        <Heading as="h1" size="xl" color="purple.300" align={'center'}>Episodes</Heading>
        <Stack spacing={4} m={8}>
          <Box>
          <MovieCard
          title="Episode 1: Psycho"
          image="psycho.jpg"
          dateReleased="1982"
          director="Alfred Hitchcock"
          summary="A secretary embezzles money and checks into a secluded motel run by the mysterious Norman Bates. The narrative takes a shocking turn with the infamous shower scene, leading to a psychological thriller that explores the depths of madness and the unsettling consequences of fractured identities."
          comingSoon={false}
          isPublished={true}
          publish_date={"October 2023"}
          guest={"Steven delights us with little known facts and music score commentary and discusses the cultural impact this unique plot has on future cinema."}
          iframe={<iframe
            width="100%"
            height="166"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1608331935&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            title="SoundCloud Player"
          ></iframe>}
        />
          </Box>
        </Stack>
        <Heading align={"center"} as="h2" size="lg" color="purple.400">Upcoming Episodes</Heading>
        <Stack spacing={4} m={8}>
          <Box>
          <MovieCard
          title="Episode 2: The Thing"
          image="Thing.jpg"
          dateReleased="1982"
          director="John Carpenter"
          summary="A group of researchers in Antarctica discover an extraterrestrial organism that assimilates and imitates other life forms, creating an atmosphere of paranoia and fear as they struggle to determine who among them has been taken over by the shape-shifting entity. As trust erodes and survival becomes uncertain, the film unfolds as a suspenseful and chilling exploration of isolation and the terrifying unknown."
          comingSoon={true}
          premier_date={"December 2023"}
          guest={"Greg reveals how this movie changed his life, how incredible the effects stand the test of time and discusses one the most ambiguous endings in horror history."}
        />
          </Box>
        </Stack>
        <Stack spacing={4} m={8}>
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
        </Stack>
      </Container>
    </div>
  );
}

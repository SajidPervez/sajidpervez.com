import { Column, Grid, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { podcasts, baseURL, podcastsPage, person } from "@/resources";
import { PodcastCard } from "@/components/podcasts/PodcastCard";

export async function generateMetadata() {
  return Meta.generate({
    title: podcastsPage.title,
    description: podcastsPage.description,
    baseURL,
    path: podcastsPage.path,
    image: `/api/og/generate?title=${encodeURIComponent(podcastsPage.title)}`,
  });
}

export default function PodcastsPage() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="32">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={podcastsPage.title}
        description={podcastsPage.description}
        path={podcastsPage.path}
        image={`/api/og/generate?title=${encodeURIComponent(podcastsPage.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${podcastsPage.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column paddingX="24" gap="12">
        <Heading variant="heading-strong-xl">Listening</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {podcastsPage.description}
        </Text>
      </Column>

      <Grid columns="3" s={{ columns: 1 }} gap="24" paddingX="24">
        {podcasts.map((podcast) => (
          <PodcastCard key={podcast.name} podcast={podcast} />
        ))}
      </Grid>
    </Column>
  );
}

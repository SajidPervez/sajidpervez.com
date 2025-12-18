"use client";

import { mailchimp, newsletter } from "@/resources";
import { Button, Heading, Input, Text, Background, Column, Row } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useEffect, useRef, useState } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);
  const kitEmbedRef = useRef<HTMLDivElement>(null);
  const isConvertKitForm =
    newsletter.ctaUrl?.includes("app.convertkit.com/forms") &&
    newsletter.ctaUrl?.includes("/subscriptions");
  const kitEmbedMatch = newsletter.ctaUrl?.match(/kit\.com\/([a-z0-9]+)(?:\/index\.js)?$/i);
  const kitEmbedId = kitEmbedMatch?.[1];
  const kitEmbedSrc = kitEmbedId ? `https://sajidpervez.kit.com/${kitEmbedId}/index.js` : undefined;
  const isKitEmbed = Boolean(kitEmbedSrc);

  useEffect(() => {
    if (!kitEmbedSrc || !kitEmbedId || !kitEmbedRef.current) {
      return;
    }

    const container = kitEmbedRef.current;
    container.innerHTML = "";

    const script = document.createElement("script");
    script.async = true;
    script.src = kitEmbedSrc;
    script.dataset.uid = kitEmbedId;
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [kitEmbedSrc, kitEmbedId]);

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      return true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const debouncedHandleChange = debounce(handleChange, 2000);

  const handleBlur = () => {
    setTouched(true);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };

  if (newsletter.display === false) return null;

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          {newsletter.title}
        </Heading>
        <Text wrap="balance" marginBottom="l" variant="body-default-l" onBackground="neutral-weak">
          {newsletter.description}
        </Text>
      </Column>
      {newsletter.ctaUrl ? (
        isConvertKitForm ? (
        <form
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          action={newsletter.ctaUrl}
          method="post"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Row
            fillWidth
            maxWidth={24}
            s={{ direction: "column" }}
            gap="8"
          >
            <Input
              formNoValidate
              id="newsletter-email"
              name="email_address"
              type="email"
              placeholder="Email"
              required
              onChange={(e) => {
                if (error) {
                  handleChange(e);
                } else {
                  debouncedHandleChange(e);
                }
              }}
              onBlur={handleBlur}
              errorMessage={error}
            />
            <div className="clear">
              <Row height="48" vertical="center">
                <Button
                  id="newsletter-subscribe"
                  type="submit"
                  value="Subscribe"
                  size="m"
                  fillWidth
                >
                  Subscribe
                </Button>
              </Row>
            </div>
          </Row>
        </form>
        ) : isKitEmbed ? (
          <Row fillWidth maxWidth={24} s={{ direction: "column" }}>
            <div ref={kitEmbedRef} style={{ width: "100%" }} />
          </Row>
        ) : (
          <Row paddingTop="8">
            <Button
              href={newsletter.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="m"
              data-border="rounded"
            >
              {newsletter.ctaLabel || "Sign up"}
            </Button>
          </Row>
        )
      ) : null}
    </Column>
  );
};

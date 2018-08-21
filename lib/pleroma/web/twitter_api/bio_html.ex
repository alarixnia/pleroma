defmodule Pleroma.Web.TwitterAPI.BioHtml do
  require HtmlSanitizeEx.Scrubber.Meta
  alias HtmlSanitizeEx.Scrubber.Meta

  @valid_schemes ["http", "https"]

  Meta.remove_cdata_sections_before_scrub()

  Meta.strip_comments()

  Meta.allow_tag_with_uri_attributes("a", ["href"], @valid_schemes)
  Meta.allow_tag_with_this_attribute_values("a", "rel", [
    "nofollow",
    "noopener",
    "noreferrer"
  ])
  Meta.allow_tag_with_this_attribute_values("a", "target", ["_blank"])
  Meta.allow_tag_with_these_attributes("br", [])
  Meta.allow_tag_with_these_attributes("p", [])

  Meta.strip_everything_not_covered()
end

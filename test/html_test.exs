defmodule Pleroma.HTMLTest do
  alias Pleroma.HTML
  use Pleroma.DataCase

  @html_sample """
    <b>this is in bold</b>
    <p>this is a paragraph</p>
    this is a linebreak<br />
    this is an image: <img src="http://example.com/image.jpg"><br />
    <script>alert('hacked')</script>
  """

  @html_onerror_sample """
    <img src="http://example.com/image.jpg" onerror="alert('hacked')">
  """

  describe "StripTags scrubber" do
    test "works as expected" do
      expected = """
      this is in bold
        this is a paragraph
        this is a linebreak
        this is an image: 
        alert('hacked')
      """

      assert expected == HTML.strip_tags(@html_sample)
    end

    test "does not allow attribute-based XSS" do
      expected = "\n"

      assert expected == HTML.strip_tags(@html_onerror_sample)
    end
  end

  describe "TwitterText scrubber" do
    test "normalizes HTML as expected" do
      expected = """
      this is in bold
        <p>this is a paragraph</p>
        this is a linebreak<br />
        this is an image: <img src="http://example.com/image.jpg" /><br />
        alert('hacked')
      """

      assert expected == HTML.filter_tags(@html_sample, Pleroma.HTML.Scrubber.TwitterText)
    end

    test "does not allow attribute-based XSS" do
      expected = """
      <img src="http://example.com/image.jpg" />
      """

      assert expected == HTML.filter_tags(@html_onerror_sample, Pleroma.HTML.Scrubber.TwitterText)
    end
  end

  describe "default scrubber" do
    test "normalizes HTML as expected" do
      expected = """
      <b>this is in bold</b>
        <p>this is a paragraph</p>
        this is a linebreak<br />
        this is an image: <img src="http://example.com/image.jpg" /><br />
        alert('hacked')
      """

      assert expected == HTML.filter_tags(@html_sample, Pleroma.HTML.Scrubber.Default)
    end

    test "does not allow attribute-based XSS" do
      expected = """
      <img src="http://example.com/image.jpg" />
      """

      assert expected == HTML.filter_tags(@html_onerror_sample, Pleroma.HTML.Scrubber.Default)
    end
  end
end

defmodule Pleroma.Web.MastodonAPI.FilterView do
  use Pleroma.Web, :view
  alias Pleroma.Web.MastodonAPI.FilterView
  alias Pleroma.Web.CommonAPI.Utils

  def render("filters.json", %{filters: filters} = opts) do
    render_many(filters, FilterView, "filter.json", opts)
  end

  def render("filter.json", %{filter: filter}) do
    expires_at =
      if filter.expires_at do
        Utils.to_masto_date(filter.expires_at)
      else
        nil
      end

    %{
      id: to_string(filter.filter_id),
      phrase: filter.phrase,
      context: filter.context,
      expires_at: expires_at,
      irreversible: filter.hide,
      whole_word: false
    }
  end
end

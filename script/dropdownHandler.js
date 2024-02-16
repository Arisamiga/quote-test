


const selections = document.getElementsByClassName("selection")[0]
const selectionData = document.getElementsByClassName("selection_items")[0]

const Premade = {
    "Lear": {
        "Act 1": {
            "Scene 1": "WyJJIGhhdmUgc28gb2Z0ZW4gYmx1c2hlZCB0byBhY2tub3dsZWRnZSBoaW0iLCAiVGhlcmUgd2FzIGdvb2Qgc3BvcnQgYXQgaGlzIG1ha2luZywgYW5kIHRoZSB3aG9yZXNvbiBtdXN0IGJlIGFja25vd2xlZGdlZCIsICJLbm93IHRoYXQgd2UgaGF2ZSBkaXZpZGVkIGluIHRocmVlIG91ciBraW5nZG9tIGFuZCB0aXMgb3VyIGZhc3QgaW50ZW50IHRvIHNoYWtlIGFsbCBjYXJlcyBhbmQgYnVzaW5lc3MgZnJvbSB0aGlzIGFnZSIsICJXZSBoYXZlIHRoaXMgaG91ciBhIGNvbnN0YW50IHdpbGwgdG8gcHVibGlzaCBvdXIgZGF1Z2h0ZXIncyBzZXZlcmFsIGRvd2VycywgdGhhdCBmdXR1cmUgc3RyaWZlIG1heSBiZSBwcmV2ZW50ZWQgbm93IiwgIlNpciwgSSBsb3ZlIHlvdSBtb3JlIHRoYW4gd29yZHMgY2FuIHdpZWxkIHRoZSBtYXR0ZXIiLCAiSSBhbSBtYWRlIG9mIHRoYXQgc2VsZiBzYW1lIG1ldGFsIGFzIG15IHNpc3RlciIsICJOb3RoaW5nIHdpbGwgY29tZSBvZiBub3RoaW5nIiwgIkkgbG92ZSB5b3VyIG1hamVzdHkgYWNjb3JkaW5nIHRvIG15IGJvbmQiLCAiQ29tZSBub3QgYmV0d2VlbiB0aGUgZHJhZ29uIGFuZCBoaXMgd3JhdGgiLCAiT25seSB3ZSBzaGFsbCByZXRhaW4gdGhlIG5hbWUgYW5kIHRoZSBhZGRpdGlvbiBvZiB0aGUga2luZyIsICJUaGlua3N0IHRob3UgdGhhdCBkdXR5IHNoYWxsIGhhdmUgZHJlYWQgdG8gc3BlYWssIHdoZW4gcG93ZXIgdG8gZmxhdHRlcnkgYm93cz8iLCAiQmV0dGVyIHRob3UgaGFkJ3N0IG5vdCBiZWVuIGJvcm4gdGhhbiBub3QgdG8gaGF2ZSBwbGVhc2VkIG1lIGJldHRlciIsICJTaGUgaXMgaGVyc2VsZiBhIGRvd2VyeSwgZmFpcmVzdCBDb3JkZWxpYSwgdGhhdCBhcnQgbW9zdCByaWNoIGFtb25nIHBvb3IiLCAiU3VjaCB1bmNvbnN0YW50IHN0YXJ0cyBhcmUgd2UgbGlrZSB0byBoYXZlIGZyb20gaGltIGFzIHRoaXMgb2YgS2VudCdzIGJhbmlzaG1lbnQiLCAiV2UgbXVzdCBkbyBzb21ldGhpbmcgYW5kIGknIHRoZSBoZWF0Il0=",
            "Scene 2": "WyJUaG91LCBuYXR1cmUsIGFydCBteSBnb2RkZXNzIiwgIlRoZSBjdXJpb3NpdHkgb2YgbmF0aW9ucyB0byBkZXByaXZlIG1lLCBmb3IgdGhhdCBJIGFtIHNvbWUgdHdlbHZlIG9yIGZvdXJ0ZWVuIG1vb25zaGluZXMgbGFnIG9mIGEgYnJvdGhlcj8iLCAiV2hvIGluIHRoZSBsdXN0eSBzdGVhbHRoIG9mIG5hdHVyZSB0YWtlIG1vcmUgY29tcG9zaXRpb24gYW5kIGZpZXJjZSBxdWFsaXR5IHRoYW4gZG90aCwgd2l0aGluIGEgZHVsbCwgc3RhbGUsIHRpcmVkIGJlZCBnbyB0byB0aGUgY3JlYXRpbmcgYSB3aG9sZSB0cmliZSBvZiBmb3BzIGdvdCAndHdlZW4gYXNsZWVwIGFuZCB3YWtlPyIsICJOYXR1cmUgZmluZHMgaXRzZWxmIHNjb3VyZ2VkIGJ5IHRoZSBzZXF1ZW50IGVmZmVjdHM6Li4uYnJvdGhlcnMgZGl2aWRlOy4uLnRoZSBib25kIGNyYWNrZWQgJ3R3aXh0IHNvbiBhbmQgZmF0aGVyIiwgIlRoZSBraW5nIGZhbGxzIGZyb20gYmlhcyBvZiBuYXR1cmU7IHRoZXJlJ3MgZmF0aGVyIGFnYWluc3QgY2hpbGQiLCAiQSBicm90aGVyIG5vYmxlLCB3aG9zZSBuYXR1cmUgaXMgc28gZmFyIGZyb20gZG9pbmcgaGFybXMgdGhhdCBoZSBzdXNwZWN0cyBub25lIl0=",
            "Scene 3": "WyIiXQ==",
            "Scene 4": "WyJOb3cgQmFuaXNoZWQgS2VudCwgSWYgdGhvdSBjYW5zdCBzZXJ2ZSB3aGVyZSB0aG91IGRvc3Qgc3RhbmQgY29uZGVtbmVkIiwgIllvdXIgaGlnaG5lc3MgaXMgbm90IGVudGVydGFpbmVkIHdpdGggdGhhdCBjZXJlbW9uaW91cyBhZmZlY3Rpb24gYXMgeW91IHdlcmUgd29udCIsICJTaW5jZSBteSBsYWRpZXMgZ29pbmcgdG8gRnJhbmNlIHNpciwgdGhlIGZvb2wgaGF0aCBwaW5lZCBoaW0gYXdheSIsICJEb3N0IHRob3UgY2FsbCBtZSBmb29sIGJveT8uLi4gQWxsIHRoeSBvdGhlciB0aXRsZXMgdGhvdSBoYXN0IGdpdmVuIGF3YXkiLCAiVGhvdSBtYWRlc3QgdGh5IGRhdWdodGVycyB0aGV5IG1vdGhlcnMiLCAiSW50byBoZXIgd29tYiBjb252ZXkgc3RlcmlsaXR5Il0NCg==",
            "Scene 5": "WyJPIGxldCBtZSBub3QgYmUgbWFkLCBub3QgbWFkLCBzd2VldCBoZWF2ZW47IGtlZXAgbWUgaW4gdGVtcGVyOyBJIHdvdWxkIG5vdCBiZSBtYWQiLCAiSSB3aWxsIGZvcmdldCBteSBuYXR1cmUsIHNvIGtpbmQgYSBmYXRoZXIiXQ==",
        },
        "Act 2": {
            "Scene 1": "WyJIYXZlIHlvdSBoZWFyZCBvZiBubyBsaWtlbHkgd2FycyB0d2l4dCB0aGUgZHVrZXMgb2YgQWxiYW55IGFuZCBDb3Jud2FsbD8iLCAiVGhlIER1a2UgYmUgaGVyZSB0b25pZ2h0ISBUaGUgYmV0dGVyISBCZXN0ISBUaGlzIHdlYXZlcyBpdHNlbGYgcGVyZm9yY2UgaW50byBteSBidXNpbmVzcyIsICJJIHRvbGQgaGltIHRoZSByZXZlbmdpbmcgZ29kcyAnZ2FpbnN0IGJhcnJpY2FkZXMgZGlkIGFsbCB0aGVpciB0aHVuZGVycyBiZW5kOy4uLiBXaXRoIGhpcyBwcmVwYXJlZCBzd29yZCBoZSBjaGFyZ2VzIGhvbWUgbXkgdW5wcmVwYXJlZCBib2R5IiwgIk9mIG15IGxhbmQgbG95YWwgYW5kIG5hdHVyYWwgYm95LCBpdCdsbCB3b3JrIHRoZSBtZWFucyB0byBtYWtlIHRoZSBjYXBhYmxlIl0=",
            "Scene 2": "WyJZb3UgY29tZSB3aXRoIGxldHRlcnMgYWdhaW5zdCB0aGUga2luZyBhbmQgdGFrZSB2YW5pdHkgdGhlIHB1cHBldHMgcGFydCBhZ2FpbnN0IHRoZSByb3lhbHR5IG9mIGhlciBraW5nIiwgIkNhbGwgbm90IHRoZSBzdG9ja3MgZm9yIG1lOyBJIHNlcnZlIHRoZSBraW5nIE9uIHdob3NlIGVtcGxveW1lbnQgSSB3YXMgc2VudCB0byB5b3UuIFlvdSBzaGFsbCBkbyBzbWFsbCByZXNwZWN0LCBzaG93IHRvbyBib2xkIG1hbGljZSBhZ2FpbnN0IHRoZSBncmFjZSBhbmQgcGVyc29uIG9mIG15IG1hc3RlciwgU3RvY2tpbmcgaGlzIG1lc3NlbmdlciJd",
            "Scene 3": "WyIiXQ==",
            "Scene 4": "WyJUaGV5IGR1cnN0IG5vIGRvJ3QsIFRoZXkgY291bGQgbm90LCB3b3VsZCBub3QgZG8ndCwgdGlzIHdvcnNlIHRoYW4gbXVyZGVyIiwgIk8hIEhvdyB0aGlzIG1vdGhlciBzd2VsbHMgdXAgdG93YXJkcyBteSBoZWFydDsgSHlzdGVyaWNhIFBhc3Npbz8gRG93biB0aHkgY2xpbWJpbmcgc29ycm93IiwgIkxldCBnbyB0aHkgaG9sZCB3aGVuIGEgZ3JlYXQgd2hlZWwgcm9sbHMgZG93biBhIGhpbGwgbGVzdCBpdCBicmVhayB0aGV5IG5lY2sgd2hlbiBmb2xsb3dpbmcgaXQiLCAiV2UgYXJlIG5vdCBvdXJzZWx2ZXM7IHdoZW4gbmF0dXJlIGJlaW5nIG9wcHJlc3NlZCwgY29tbWFuZHMgdGhlIG1pbmQgdG8gc3VmZmVyIHdpdGggdGhlIGJvZHkiLCAiQmVsb3ZlZCBSZWdhbiwgdGh5IHNpc3RlcnMgbmF1Z2h0IiwgIkkgY2Fubm90IHRoaW5rIG15IHNpc3RlciBpbiB0aGUgbGVhc3Qgd291bGQgZmFpbCBoZXIgb2JsaWdhdGlvbiIsICJPIHNpciB5b3UgYXJlIG9sZC4uLiBZb3Ugc2hvdWxkIGJlIHJ1bGVkIGFuZCBsZWQgYnkgc29tZSBkaXNjcmV0aW9uIHRoYXQgc2VydmVkIHlvdXIgc3RhdGUgYmV0dGVyIHRoYW4geW91cnNlbGYiLCAiSSBwcmF5IHRoZWUgZmF0aGVyLCBiZWluZyB3ZWFrLCBzZWVtIHNvIiwgIlJhdGhlciBJIGFianVyZSBhbGwgcm9vdHMgYW5kIGNob29zZSB0byB3YWdlIGFnYWluc3QgdGhlIGVubWl0eSBvZiB0aGUgYWlyIiwgIkkgcHJpdGhlZSBkYXVnaHRlciwgZG8gbm90IG1ha2UgbWUgbWFkIiwgIk1hbidzIGxpZmUgaXMgYXMgY2hlYXAgYXMgYmVhc3RzIiwgIkEgcG9vciBvbGQgbWFuLCBhcyBmdWxsIG9mIGdyaWVmIGFzIGFnZSIsICJTaHV0IHlvdXIgZG9vcnMgbXkgbG9yZCwgdGlzIGEgd2lsZCBuaWdodCJd",
        },
        "Act 3": {
            "Scene 1": "WyJDb250ZW5kaW5nIHdpdGggdGhlIGZyZXRmdWwgZWxlbWVudDogQmlkcyB0aGUgd2luZHMgYmxvdyB0aGUgZWFydGggaW50byB0aGUgc2VhIiwgIkltcGV0dW91cyBibGFzdHMsIHdpdGggZXllbGVzcyByYWdlIiwgIlN0cml2ZXMgaW4gaGlzIGxpdHRsZSB3b3JsZCBvZiBtYW4gdG8gb3V0LXNjb3JuIHRoZSB0by1hbmQtZnJvIGNvbmZsaWN0aW5nIHdpbmQgYW5kIHJhaW4iLCAiZnJvbSBGcmFuY2UgdGhlcmUgY29tZXMgYSBwb3dlciBpbnRvIHRoaXMgc2NhdHRlcidkIGtpbmdkb207IHdobyBhbHJlYWR5LCB3aXNlIGluIG91ciBuZWdsaWdlbmNlLCBoYXZlIHNlY3JldCBmZWV0IGluIHNvbWUgb2Ygb3VyIGJlc3QgcG9ydHMiXQ==",
            "Scene 2": "WyJCbG93LCB3aW5kcywgYW5kIGNyYWNrIHlvdXIgY2hlZWtzISIsICJBbmQgdGhvdSwgYWxsLXNoYWtpbmcgdGh1bmRlciwgc21pdGUgZmxhdCB0aGUgdGhpY2sgcm90dW5kaXR5IG9mJyB0aGUgd29ybGQhIENyYWNrIG5hdHVyZSdzIG1vdWxkcywgYW4gZ2VybWVucyBzcGlsbCBhdCBvbmNlLCBUaGF0IG1ha2UgaW5ncmF0ZWZ1bCBtYW4hIiwgIkEgcG9vciwgaW5maXJtLCB3ZWFrLCBhbmQgZGVzcGlzZWQgb2xkIG1hbiIsICJIZSB0aGF0IGhhcyBhIGhvdXNlIHRvIHB1dCdzIGhlYWQgaW4gaGFzIGEgZ29vZCBoZWFkLXBpZWNlIiwgIkkgYW0gYSBtYW4gbW9yZSBzaW5uJ2QgYWdhaW5zdCB0aGFuIHNpbm5pbmciXQ==",
            "Scene 3": "WyJJIGxpa2Ugbm90IHRoaXMgdW5uYXR1cmFsIGRlYWxpbmcgd2hlbiBJIGRlc2lyZWQgdGhlaXIgbGVhdmUgdGhhdCBJIG1pZ2h0IHBpdHkgaGltLCB0aGV5IHRvb2sgZnJvbSBtZSB0aGUgdXNlIG9mIG15IG93biBob3VzZSwgY2hhcmdlZCBtZSwgb24gcGFpbiBvZiB0aGVpciBwZXJwZXR1YWwgZGlzcGxlYXN1cmUsIG5laXRoZXIgdG8gc3BlYWsgb2YgaGltLCBlbnRyZWF0IGZvciBoaW0sIG5vciBpbiBhbnkgd2F5IHN1c3RhaW4gaGltIiwgIklmIEkgZGllIGZvciBpdCwgYXMgbm8gbGVzcyBpcyB0aHJlYXRlbmVkIG1lLCB0aGUga2luZywgbXkgbWFzdGVyLCBtdXN0IGJlIHJlbGlldmVkIiwgIlRoZSB5b3VuZ2VyIHJpc2VzIHdoZW4gdGhlIG9sZCBkb3RoIGZhbGwiXQ==",
            "Scene 4": "WyJUaGlzIHRlbXBlc3Qgd2lsbCBub3QgZ2l2ZSBtZSBsZWF2ZSB0byBwb25kZXIgb24gdGhpbmdzIHdvdWxkIGh1cnQgbWUgbW9yZSIsICJPIHRoYXQgd2F5IG1hZG5lc3MgbGllczsgbGV0IG1lIHNodW4gdGhhdCwgbm8gbW9yZSBvZiB0aGF0IiwgIlBvb3IgbmFrZWQgd3JldGNoZXMuLi4gSSBoYXZlIHRhJ2VuIHRvbyBsaXR0bGUgY2FyZSBvZiB0aGlzIiwgIkV4cG9zZSB0aHlzZWxmIHRvIGZlZWwgd2hhdCB3cmV0Y2hlcyBmZWVsLCB0aGF0IHRob3UgbWF5ZXN0IHNoYWtlIHRoZSBzdXBlcmZsdXggdG8gdGhlbSBhbmQgc2hvdyB0aGUgaGVhdmVucyBtb3JlIGp1c3QiLCAiRGVhdGgsIHRyYWl0b3IhIE5vdGhpbmcgY291bGQgaGF2ZSBzdWJkdWVkIG5hdHVyZSB0byBzdWNoIGEgbG93bmVzcyBidXQgaGlzIHVua2luZCBkYXVnaHRlcnMiLCAiUHJpdGhlZSBudW5jbGUsIHRpcyBhIG5hdWdodHkgbmlnaHQgdG8gc3dpbSBpbiIsICJPdXIgZmxlc2ggYW5kIGJsb29kIG15IGxvcmQsIGlzIGdyb3duIHNvIHZpbGUgdGhhdCBpdCBkb3RoIGhhdGUgd2hhdCBnZXRzIGl0IiwgIk15IGR1dHkgY2Fubm90IHN1ZmZlciB0byBvYmV5IGluIGFsbCB5b3VyIGRhdWdodGVycycgaGFyZCBjb21tZW50cyJd",
            "Scene 5": "WyJJIHdpbGwgaGF2ZSBteSByZXZlbmdlIGVyZSBJIGxlYXZlIHRoaXMgaG91c2UiLCAiTyBIZWF2ZW5zISBUaGF0IHRoaXMgdHJlYXNvbiB3ZXJlIG5vdCwgb3Igbm90IEkgdGhlIGRldGVjdG9yIl0=",
            "Scene 6": "WyJBbGwgdGhlIHBvd2VyIG9mIGhpcyB3aXRzIGhhdmUgZ2l2ZW4gd2F5IHRvIGhpcyBpbXBhdGllbmNlIiwgIkFycmFpZ24gaGVyIGZpcnN0LCB0aXMgR29uZXJpbC4uLiBTaGUga2lja2VkIHRoZSBwb29yIGtpbmcsIGhlciBmYXRoZXIiLCAiTXkgdGVhcnMgYmVnaW4gdG8gdGFrZSBoaXMgcGFydCBzbyBtdWNoLCB0aGV5J2xsIG1hciBteSBjb3VudGVyZmVpdGluZyIsICJIb3cgbGlnaHQgYW5kIHBvcnRhYmxlIG15IHBhaW4gc2VlbXMgbm93IHdoZW4gdGhhdCB3aGljaCBtYWtlcyBtZSBiZW5kIG1ha2VzIHRoZSBraW5nIGJvdyJd",
            "Scene 7": "WyJUaGUgcmV2ZW5nZXMgd2UgYXJlIGJvdW5kIHRvIHRha2UgdXBvbiB5b3VyIHRyYWl0b3JvdXMgZmF0aGVyIGFyZSBub3QgZm9yIHlvdXIgYmVob2xkaW5nLi4uIG15IGVhcmwgb2YgR2xvdWNlc3RlciIsICJJIGFtIHlvdXIgaG9zdDsgd2l0aCByb2JiZXIncyBoYW5kcyBteSBob3NwaXRhYmxlIGZhdm91cnMgeW91IHNob3VsZCBub3QgcnVmZmxlIHRodXMiLCAiSGFuZyBoaW0gaW5zdGFudGx5ISBQbHVjayBvdXQgaGlzIGV5ZXMhIiwgIkkgYW0gdGllZCB0byB0aGUgc3Rha2UgYW5kIEkgbXVzdCBzdGFuZCB0aGUgY291cnNlIiwgIkkgd291bGQgbm90IHNlZSB0aHkgY3J1ZWwgbmFpbHMgcGx1Y2sgb3V0IGhpcyBwb29yIG9sZCBleWVzLCBub3IgdGh5IGZpZXJjZSBmYW5ncyBpbiBoaXMgYW5vaW50ZWQgZmxlc2ggc3RpY2sgYm9hcmlzaCBmYW5ncyIsICJJIHNoYWxsIHNlZSB0aGUgd2luZ2VkIHZlbmdlYW5jZSBvdmVydGFrZSBzdWNoIGNoaWxkcmVuIiwgIk91dCB2aWxlIGplbGx5ISBXaGVyZSBpcyB0aHkgbHVzdHJlIG5vdz8iLCAiTyBteSBmb2xsaWVzISBUaGVuIEVkZ2FyIHdhcyBhYnVzZWQ/IEtpbmQgZ29kcywgZm9yZ2l2ZSBtZSB0aGF0IGFuZCBwcm9zcGVyIGhpbSJd",
        },
        "Act 4": {
            "Scene 1": "WyJUaGUgd29yc3QgcmV0dXJucyB0byBsYXVnaHRlciIsICJNaWdodCBJIGJ1dCBsaXZlIHRvIHNlZSB0aHJlZSBpbiBteSB0b3VjaCwgSSdkIHNheSBJIGhhZCBteSBleWVzIGFnYWluIiwgIkFzIGZsaWVzIHRvIHdhbnRvbiBib3lzIGFyZSB3ZSB0byB0aGUgZ29kczsgdGhleSBraWxsIHVzIGZvciBzcG9ydCIsICJUaXMgdGhlIHRpbWUncyBwbGFndWUgaW4gd2hpY2ggbWFkbWVuIGxlYWQgdGhlIGJsaW5kIiwgIlNvIGRpc3RyaWJ1dGlvbiBzaG91bGQgdW5kbyBleGNlc3MsIGFuZCBlYWNoIG1hbiBoYXZlIGVub3VnaCIsICJJIGNhbm5vdCBkYXViIGl0IGZ1cnRoZXIiXQ==",
        }

    }
}

function escapeHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function getCurrentQuotesEntered() {
    var quotes = document.getElementsByClassName("quote");
    var quoteArray = [];
    for (var i = 0; i < quotes.length; i++) {
        quoteArray.push(quotes[i].value);
    }
    return quoteArray;
}

function quoteModal(quotes, title){
    const modal = document.getElementsByClassName("modal")[0];
    const modalContent = document.getElementsByClassName("modal-content")[0];
    modal.style.display = "block";
    modalContent.innerHTML = "";
    document.body.style.overflow = "hidden";
    let html = `
    <span class="close">&times;</span>
    <div class="modal_header">
        <h1>${title}</h1>
        <ul>
    `
    console.log(quotes)
    quotes.forEach((quote, index) => {
        html += `
            <li id="quote-${index}">${quote}</li>
        `
    });

    html += `
        </ul>
    </div>
    Do you want to use these quotes? <span style="color:red;">This will overwrite the current quotes.</span>

    <div class="useQuotesButton">Use Template Quotes</div>
    <div class="addQuotesButton">Add to Existing Quotes</div>
    `
    modalContent.innerHTML = html;

    const modal_close = document.getElementsByClassName("close")[0]
    modal_close.addEventListener("click", () => {
        document.body.style.overflow = "auto";
        const modal = document.getElementsByClassName("modal")[0];
        // Play fade in animation in reverse then hide the modal
        modal.style.animation = "fadeOut 0.5s";
        // When animation ends, hide the modal
        modal.addEventListener("animationend", (event) => {
            if (event.animationName === "fadeOut") {
                modal.style.display = "none";
                modal.style.animation = "";
            }
        });
    });

    const useQuotesButton = document.getElementsByClassName("useQuotesButton")[0];
    useQuotesButton.addEventListener("click", () => {
        localStorage.setItem("quotes", btoa(encodeURIComponent(JSON.stringify(quotes))));
        window.location.href = "index.html";
    });

    const addQuotesButton = document.getElementsByClassName("addQuotesButton")[0];
    addQuotesButton.addEventListener("click", () => {
        const currentQuotes = getCurrentQuotesEntered();
        const newQuotes = quotes;
        const currentQuotesArray = currentQuotes;
        const combinedQuotes = [...currentQuotesArray, ...newQuotes];
        localStorage.setItem("quotes", btoa(encodeURIComponent(JSON.stringify(combinedQuotes))));
        window.location.href = "index.html";
    });
}

selections.addEventListener("change", (event) => {
    const selectedOption = event.target.value;

    // selectionData.innerHTML = "";

    if (selectedOption === "default") {
        selectionData.style.minHeight = `0px`;
        selectionData.style.maxHeight = `0px`;
    }

    if (selectedOption === "More") {
        selectionData.style.minHeight = `60px`;
        selectionData.style.maxHeight = `60px`;
        selectionData.innerText = "More Options are coming soon...";
    }

    if (selectedOption === "Lear") {
        const html = `
        <div class='headline'>
            <h1>Act 1</h1>
        </div>
        <div class='content'>
            <div class='grid'>
                <div class='grid_item'>Scene 1</div>
                <div class='grid_item'>Scene 2</div>
                <div class='grid_item'>Scene 3 [EMPTY]</div>
                <div class='grid_item'>Scene 4</div>
                <div class='grid_item'>Scene 5</div>
            </div>
        </div>

        <div class='headline'>
            <h1>Act 2</h1>
        </div>
        <div class='content'>
            <div class='grid'>
                <div class='grid_item'>Scene 1</div>
                <div class='grid_item'>Scene 2</div>
                <div class='grid_item'>Scene 3 [EMPTY]</div>
                <div class='grid_item'>Scene 4</div>
            </div>
        </div>

        <div class='headline'>
        <h1>Act 3</h1>
    </div>
    <div class='content'>
        <div class='grid'>
            <div class='grid_item'>Scene 1</div>
            <div class='grid_item'>Scene 2</div>
            <div class='grid_item'>Scene 3</div>
            <div class='grid_item'>Scene 4</div>
            <div class='grid_item'>Scene 5</div>
            <div class='grid_item'>Scene 6</div>
            <div class='grid_item'>Scene 7</div>
        </div>
    </div>
        <div class='headline'>
        <h1>Act 4</h1>
    </div>
    <div class='content'>
        <div class='grid'>
            <div class='grid_item'>Scene 1</div>
        </div>
    </div>
        `
        selectionData.innerHTML = html;
        // let estimatedHeight = ;
        // Create estimatedHeight based on newlines
        let estimatedHeight = html.split("\n").length * 25;
        selectionData.style.minHeight = `${estimatedHeight}px`;
        selectionData.style.maxHeight = `${estimatedHeight}px`;
    }

    if (selectedOption == "Own") {
        var data = localStorage.getItem("collections") ?? null;
        var html;

        if (data != null) {
            const collections = JSON.parse(decodeURIComponent(atob(data)));
            html = `
            <h2> Your Saved Quotes</h2>
            <div class="collections">
            `
            for (var collection in collections) {
                html += `
                <div class="collection" id="${collection}">
                    ${collection}
                    <hr>
                    <ul>
                    <li>Date: ${collections[collection].date}</li>
                    <li>Quotes: ${collections[collection].quotes.length}</li>
                    </ul>
                </div>
                `
            }
            html += `
            </div>
            <div class="saveQuotes">Save Current Quotes</div>
            `
        }
        else {
            html = `
            <h2> You Currently Dont have any Quotes Saved! </h2>
            <div class="saveQuotes">Save Current Quotes</div>








            `
        }
        selectionData.innerHTML = html;
        // let estimatedHeight = ;
        // Create estimatedHeight based on newlines
        let estimatedHeight = html.split("\n").length * 30;
        selectionData.style.minHeight = `${estimatedHeight}px`;
        selectionData.style.maxHeight = `${estimatedHeight}px`;

        const saveCurrentQuotes = document.getElementsByClassName("saveQuotes")[0]
        
        saveCurrentQuotes.addEventListener("click", (event) => {
            const modal = document.getElementsByClassName("modal")[0];
            const modalContent = document.getElementsByClassName("modal-content")[0];
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
            modalContent.innerHTML = "";
            let html = `
            
            <span class="close">&times;</span>
            <div class="modal_header">

            <span>Name: </span><input class="collectionName" placeholder="Name of Collection"> 

                <h2>Current Quotes:</h2>
                <ul>
            `
            var quotes = document.getElementsByClassName("quote");
            var quoteArray = [];
            for (var i = 0; i < quotes.length; i++) {
                quoteArray.push(quotes[i].value);
                html += `
                <li id="quote-${i}">${quotes[i].value}</li>
                `
            };
            html += `
                </ul>
            </div>
            <hr>
    
            <div class="saveToDisabled saveTo">Save to "📖My Quotes"</div>
            `
            modalContent.innerHTML = html;
            const inputName = document.getElementsByClassName("collectionName")[0]
            inputName.addEventListener("input", (event) => {
                const saveButton = document.getElementsByClassName("saveTo")[0]
                console.log(inputName.value)
                if (inputName.value.trim() == "") {
                    saveButton.innerText = 'Save to "📖My Quotes"';
                    saveButton.classList.add("saveToDisabled")
                    return;
                }
                saveButton.innerText = 'Save to "📖My Quotes" as "' + inputName.value + '"'
                saveButton.classList.remove("saveToDisabled")
            });

            const saveButton = document.getElementsByClassName("saveTo")[0]
            saveButton.addEventListener("click", (event) => {
                if (saveButton.classList.contains("saveToDisabled")) {
                    return;
                }
                const collectionName = inputName.value;

                const dataCollections = localStorage.getItem("collections") ?? null;

                var collections;
                if (dataCollections == null) {
                    collections = {};
                }
                else {
                    collections = JSON.parse(decodeURIComponent(atob(dataCollections)))
                }

                collections[collectionName] = {
                    quotes: quoteArray,
                    date: new Date().toLocaleDateString()
                }
                localStorage.setItem("collections", btoa(encodeURIComponent(JSON.stringify(collections))));
                window.location.href = "index.html";
            });
    
            const modal_close = document.getElementsByClassName("close")[0]
            modal_close.addEventListener("click", () => {
                document.body.style.overflow = "auto";
                const modal = document.getElementsByClassName("modal")[0];
                // Play fade in animation in reverse then hide the modal
                modal.style.animation = "fadeOut 0.5s";
                // When animation ends, hide the modal
                modal.addEventListener("animationend", (event) => {
                    if (event.animationName === "fadeOut") {
                        modal.style.display = "none";
                        modal.style.animation = "";
                    }
                });
            });
        })

        if (data != null) {
            document.getElementsByClassName("collection").forEach((element) => {
                element.addEventListener("click", (event) => {
                    var collections = JSON.parse(decodeURIComponent(atob(data)));
                    quoteModal(collections[element.id].quotes, element.id);
                });
            });
        }
    }

});

selectionData.addEventListener("click", (event) => {
    const element = event.target;

    if (element.classList.contains("grid_item")) {
        const scene = element.innerText;
        const act = event.target.parentElement.parentElement.previousElementSibling.innerText;
        const topic = selections[selections.selectedIndex].innerText;
        quoteModal(JSON.parse(decodeURIComponent(atob(Premade.Lear[act][scene]))), `${topic} | ${act} ${scene} Quotes`);
    }
});